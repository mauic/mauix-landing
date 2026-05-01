/**
 * Mauix Servicios Técnicos - Main Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X (optional simple animation)
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });

    // 2. Smooth Scrolling (for browsers that don't support scroll-behavior: smooth)
    // and adjusting for fixed header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 72;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Recoger datos del formulario
            const empresa = document.getElementById('empresa').value;
            const telefono = document.getElementById('telefono').value;
            const correo = document.getElementById('correo').value;
            const servicioSelect = document.getElementById('servicio');
            const servicio = servicioSelect.options[servicioSelect.selectedIndex].text;
            const mensaje = document.getElementById('mensaje').value;

            // Formatear mensaje para WhatsApp
            const textoWhatsApp = `Hola, solicito una evaluación técnica.

*Empresa/Condominio:* ${empresa}
*Teléfono:* ${telefono}
*Correo:* ${correo}
*Servicio requerido:* ${servicio}

*Mensaje:*
${mensaje}`;

            // Número proporcionado por el usuario
            const numeroWhatsApp = "56933377465";
            
            // Crear URL de WhatsApp con el texto codificado
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Redirigir a WhatsApp
            window.open(urlWhatsApp, '_blank');
            
            // Opcional: mostrar mensaje de éxito y limpiar formulario
            formMessage.textContent = "Redirigiendo a WhatsApp...";
            formMessage.classList.remove('hidden');
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }

    // 5. Update Copyright Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 6. Image Error Handler (Graceful degradation for missing images)
    // The user requested a modern placeholder if images don't exist
    const icons = {
        cctv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
        access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
        fence: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>',
        gate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>',
        network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>',
        intercom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
        tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.8-2.8a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77z"></path></svg>',
        default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>'
    };

    const images = document.querySelectorAll('img.image-handled');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder div
            const placeholder = document.createElement('div');
            placeholder.className = 'img-placeholder-active';
            
            // Set dimensions based on parent wrapper or fixed ratio
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            
            // Get icon key
            const iconKey = this.getAttribute('data-icon') || 'default';
            const iconSvg = icons[iconKey] || icons.default;
            const text = this.getAttribute('alt') || 'Imagen no disponible';
            
            placeholder.innerHTML = `
                ${iconSvg}
                <span>${text}</span>
            `;
            
            // Replace image with placeholder
            if (this.parentNode) {
                this.parentNode.replaceChild(placeholder, this);
            }
        });
        
        // Force check if image is already broken (from cache)
        if (img.complete && img.naturalHeight === 0) {
            const event = new Event('error');
            img.dispatchEvent(event);
        }
    });



    // 8. Carousel Logic
    const carouselTrack = document.getElementById('servicesCarousel');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (carouselTrack && btnPrev && btnNext) {
        const getScrollAmount = () => {
            const card = carouselTrack.querySelector('.service-card');
            return card ? card.offsetWidth + 24 : 350; // 24 is the gap
        };

        const updateButtons = () => {
            btnPrev.style.opacity = carouselTrack.scrollLeft <= 0 ? '0.5' : '1';
            btnPrev.style.pointerEvents = carouselTrack.scrollLeft <= 0 ? 'none' : 'auto';
            
            const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
            btnNext.style.opacity = carouselTrack.scrollLeft >= maxScroll - 5 ? '0.5' : '1';
            btnNext.style.pointerEvents = carouselTrack.scrollLeft >= maxScroll - 5 ? 'none' : 'auto';
        };

        btnNext.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        carouselTrack.addEventListener('scroll', updateButtons);
        // Initial state
        setTimeout(updateButtons, 100);

        // iPod effect: Active card scaling
        const cards = carouselTrack.querySelectorAll('.service-card');
        
        const observerOptions = {
            root: carouselTrack,
            threshold: 0.6 // Slightly lower for better mobile triggering
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    entry.target.classList.remove('is-active');
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));
    }
});
