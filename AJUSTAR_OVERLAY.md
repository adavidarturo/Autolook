# Guía: Ajustar el Difuminado (Overlay) de las Imágenes Hero

## Ubicación de los Controles

En el archivo `css/styles.css`, ve a las **líneas 51-52** (dentro de `:root`):

```css
--hero-overlay-dark: 0.5;          /* Opacidad del oscuro (0-1) */
--hero-overlay-cyan: 0.08;         /* Opacidad del tono cian (0-1) */
```

## Cómo Funciona la Escala

| Valor | Efecto | Visual |
|-------|--------|---------|
| **0** | Completamente transparente | Se ve la imagen sin oscurecer |
| **0.3** | 30% oscuro | Imagen clara, texto menos visible |
| **0.5** | 50% oscuro (RECOMENDADO) | Balance perfecto entre imagen y texto |
| **0.7** | 70% oscuro | Texto muy visible, imagen oscura |
| **1.0** | Completamente opaco | Negro sólido, no se ve nada |

## Qué Hace Cada Variable

- **`--hero-overlay-dark`**: Controla qué tan oscuro es el overlay (usa color gris/negro)
  - Ajusta este valor si los títulos no se leen bien
  - Valores recomendados: `0.5` a `0.7`

- **`--hero-overlay-cyan`**: Controla el brillo cian/azul-turquesa
  - Ajusta este valor si quieres más o menos del tono cian
  - Normalmente déjalo en `0.08` (valores bajos)

## Pasos para Ajustar el Difuminado

### 1. Encuentra el Valor Correcto
Abre `css/styles.css` y cambia solo el número en `--hero-overlay-dark`:

```css
/* Prueba 1: Si quieres más claridad en la imagen */
--hero-overlay-dark: 0.3;

/* Prueba 2: Si quieres balance (DEFAULT) */
--hero-overlay-dark: 0.5;

/* Prueba 3: Si quieres más oscuridad para legibilidad */
--hero-overlay-dark: 0.7;
```

### 2. Guarda y Recarga
- Guarda el archivo CSS
- Abre o recarga tu navegador en `index.html`
- Observa cómo se ve el título sobre la imagen

### 3. Ajusta Hasta Encontrar el Balance Perfecto
Prueba valores intermedios como `0.55`, `0.6`, `0.65`, etc.

## Cambiar la Imagen Hero

### Para `index.html`
En `css/styles.css` línea 315, en la clase `.hero`:
```css
background-image: linear-gradient(...), url('assets/images/hero-bg.jpg');
                                               ↑ CAMBIA ESTE NOMBRE
```

Reemplaza `hero-bg.jpg` con tu nombre de archivo:
- `hero-bg.jpg` ← Tu imagen actual
- `hero-principal.jpg` ← Si cambias de nombre
- `portada-autolook.jpg` ← O cualquier otro archivo

### Para `nosotros.html` y `contacto.html`
Tienes dos opciones:

**Opción A: Usar los valores globales (RECOMENDADO)**
En `nosotros.html` y `contacto.html`, reemplaza el style inline con la clase:
```html
<!-- ANTES (hardcoded) -->
<section class="page-hero" style="background-image: linear-gradient(135deg, rgba(15, 15, 15, 0.4) 0%, rgba(10, 174, 196, 0.08) 100%), url('assets/images/hero-nosotros.jpg');">

<!-- DESPUÉS (usa variables CSS) -->
<section class="page-hero" style="background-image: url('assets/images/hero-nosotros.jpg');">
```

Luego en `css/styles.css` línea 370, la clase `.page-hero` ya usa las variables automáticamente.

**Opción B: Usar valores diferentes para cada página**
Si quieres que `nosotros.html` tenga diferente oscuridad que `index.html`:

1. En `nosotros.html`, agrega una clase personalizada:
```html
<section class="page-hero page-hero-nosotros" style="background-image: url('assets/images/hero-nosotros.jpg');">
```

2. En `css/styles.css` (al final, antes del RESPONSIVE), agrega:
```css
/* Overlay diferente para Nosotros */
.page-hero-nosotros {
    --hero-overlay-dark: 0.6;
}
```

## Estructura de Archivos de Imágenes

Las imágenes hero deben estar en:
```
Autolookpage/
└── assets/
    └── images/
        ├── MainLogo.jpg          ✓ Ya existe
        ├── hero-bg.jpg           ✓ Ya existe (index)
        ├── hero-nosotros.jpg     ← Agrega esto
        └── hero-contacto.jpg     ← Agrega esto
```

## Checklist de Implementación

- [ ] He ajustado `--hero-overlay-dark` en `css/styles.css` línea 51
- [ ] He recargado el navegador y se ve bien el título sobre la imagen
- [ ] He agregado `hero-nosotros.jpg` a `assets/images/`
- [ ] He actualizado la ruta en `nosotros.html`
- [ ] He agregado `hero-contacto.jpg` a `assets/images/`
- [ ] He actualizado la ruta en `contacto.html`
- [ ] Los títulos son legibles en las 3 páginas

## Troubleshooting

**Problema**: El overlay todavía se ve muy oscuro o muy claro
**Solución**: Prueba incrementos de `0.05` (ej: `0.45`, `0.55`, `0.65`)

**Problema**: No veo cambios después de editar CSS
**Solución**:
- Limpia el caché del navegador (Ctrl+Shift+Del)
- O abre en navegación privada

**Problema**: La imagen no se carga
**Solución**: Verifica que:
- El archivo exista en `assets/images/`
- El nombre en CSS coincida exactamente (sensible a mayúsculas)
- La ruta sea relativa: `assets/images/nombre.jpg`

## Resumen

Para regular el difuminado oscuro en todas tus páginas hero:
1. Abre `css/styles.css`
2. Ve a línea 51
3. Cambia el número en `--hero-overlay-dark: 0.5;`
4. Guarda y recarga
5. ¡Listo! El cambio afecta automáticamente `.hero` y `.page-hero`

Para cambiar imágenes específicas, busca `url('assets/images/...jpg')` y cambia el nombre del archivo.
