# Mauix Servicios Técnicos

Landing page profesional para Mauix Servicios Técnicos. Desarrollada con HTML, CSS y JavaScript puro, orientada a la continuidad operativa para condominios y pymes.

## Estructura del Proyecto

```
/
├── index.html           # Archivo principal de la página web
├── README.md            # Instrucciones del proyecto
├── .nojekyll            # Archivo para asegurar correcto funcionamiento en GitHub Pages
└── assets/
    ├── css/
    │   └── styles.css   # Estilos de la página
    ├── js/
    │   └── main.js      # Lógica, animaciones y manejo de imágenes
    └── img/             # Carpeta de imágenes (logo, hero, servicios)
```

## Instrucciones para publicar en GitHub Pages

Esta página está lista para ser publicada de forma gratuita utilizando GitHub Pages. Sigue estos pasos:

1. Crea un repositorio en [GitHub](https://github.com/).
2. Sube todos los archivos del proyecto al repositorio (incluyendo la carpeta `assets` y `.nojekyll`).
3. Ve a la pestaña **Settings** (Configuración) de tu repositorio.
4. En el menú lateral izquierdo, haz clic en **Pages**.
5. En la sección *Build and deployment*, en la opción *Source*, selecciona **Deploy from a branch**.
6. En la opción *Branch*, selecciona la rama **main** (o master) y la carpeta **/ (root)**.
7. Haz clic en **Save** (Guardar).
8. Espera unos minutos y GitHub te entregará una URL (ej. `https://tu-usuario.github.io/tu-repo/`). Abre esa URL para ver tu sitio publicado.

## Cómo reemplazar las imágenes

El sitio cuenta con un sistema inteligente: si una imagen no se encuentra o falla al cargar, mostrará un elegante bloque con un ícono técnico y el título del servicio.

Para agregar o reemplazar las imágenes definitivas:

1. Coloca tus nuevas imágenes dentro de la carpeta `assets/img/`.
2. Mantén exactamente los mismos nombres de archivo definidos en el código (ej. `hero.jpg`, `cctv.jpg`, `control-acceso.jpg`, etc.).
3. Si deseas usar nombres distintos, deberás editar las rutas `src="..."` correspondientes en el archivo `index.html`.

**Nombres de imágenes utilizados:**
- `logo.png`
- `hero.jpg`
- `cctv.jpg`
- `control-acceso.jpg`
- `cerco-electrico.jpg`
- `automatizacion-porton.jpg`
- `redes-cableado.jpg`
- `citofonia.jpg`
- `soportes-tecnicos.jpg`

## Tecnologías
- HTML5 Semántico
- CSS3 (Variables, Flexbox, CSS Grid, Glassmorphism)
- Vanilla JavaScript (Animaciones Intersection Observer, Fallback de imágenes, Scroll suave)
