# AUTOLOOK - Premium Automotive Detailing Website

## Descripción General

Website profesional de 5 páginas para **Autolook**, empresa especializada en detailing automotriz premium. Diseño moderno con estética de lujo, totalmente responsive y con funcionalidad dinámica.

---

## 📋 Estructura del Proyecto

```
Autolookpage/
├── index.html              # Página de inicio (Hero + Resumen de servicios)
├── servicios.html          # Listado completo de 8 servicios
├── nosotros.html           # Aboutpage con Misión/Visión/Staff
├── contacto.html           # Página de contacto con Google Maps + Formulario
├── join-us.html            # Formulario de solicitud de servicios
├── css/
│   └── styles.css          # Estilos globales (Premium/Lujo)
├── js/
│   └── script.js           # Lógica JavaScript (Arrays + Dinámico)
└── assets/
    ├── images/            # Folder para imágenes (VACÍO - Agrega aquí)
    └── svgs/              # Folder para iconos SVG (opcional)
```

---

## 🎨 Características Principales

✅ **5 Páginas HTML Completas**

- Index con hero impactante
- Servicios con renderización dinámica
- About con staff profesional
- Contacto con Google Maps integrado
- Formulario de solicitud inteligente

✅ **Array de 8 Servicios**

- Ceramic Coating
- Pulido Profesional
- Detailing Interior
- Protección PPF
- Limpieza de Motor
- Restauración de Ópticas
- Descontaminación
- Mantenimiento Premium

✅ **Funcionalidad Dinámica**

- Renderización de servicios desde Array JS
- Selector dinámico con textarea condicional en formulario
- Validación de formularios
- Social icons (Instagram, Facebook, WhatsApp)

✅ **Diseño Premium**

- Colores dorados (#d4af37) y tonos oscuros
- Responsive design (Mobile, Tablet, Desktop)
- Animaciones suaves
- Transiciones elegantes

---

## 🖼️ Espacios para Imágenes

### 1. **Hero Image (index.html)**

- **Ubicación**: `assets/images/hero-bg.jpg`
- **Tamaño recomendado**: 1920x1080 o superior
- **Tema**: Auto lujoso, detailing en proceso, garage premium
- **Instrucciones en HTML**: Línea ~42 en index.html

### 2. **Servicios Preview (index.html)**

- **Ubicación**: `assets/images/[servicio-nombre].jpg`
- **Tamaño**: 500x300 px
- **Cantidad**: 3 imágenes (Ceramic Coating, Pulido, Detailing Interior)

### 3. **Servicios Completos (servicios.html)**

- **Ubicación**: `assets/images/[service-id].jpg`
- **Tamaño**: 400x250 px
- **Cantidad**: 8 imágenes (una por cada servicio)
- **Ejemplo**: `ceramic-coating.jpg`, `pulido.jpg`, etc.

### 4. **Staff (nosotros.html)**

- **Ubicación**: `assets/images/staff-1.jpg`, `assets/images/staff-2.jpg`
- **Tamaño**: 500x500 px
- **Tipo**: Fotos profesionales de 2 asesores

---

## 📝 Instrucciones de Personalización

### 1. **Agregar Imágenes**

```bash
# Crea la estructura de directorios
mkdir -p assets/images
mkdir -p assets/svgs

# Copia tus imágenes a:
# - Hero: assets/images/hero-bg.jpg
# - Servicios: assets/images/[service-id].jpg
# - Staff: assets/images/staff-1.jpg, staff-2.jpg
```

### 2. **Actualizar Rutas de Imágenes en HTML**

En **index.html** (línea ~42):

```html
<!-- Reemplazar: src="RUTA_AQUÍ" con tu imagen -->
```

En **servicios.html**, cada tarjeta tiene un comentario indicando dónde agregar imagen.

### 3. **Integrar Google Maps (contacto.html)**

1. Ve a: https://www.google.com/maps
2. Busca tu ubicación
3. Haz clic en "Compartir"
4. Selecciona "Insertar un mapa"
5. Copia el `src` del iframe
6. Reemplaza en **contacto.html** línea ~98

### 4. **Actualizar Información de Contacto**

Busca y reemplaza en todos los archivos:

- `+XX XXX-XXXX` → Tu teléfono
- `info@autolook.com` → Tu email
- `Calle Principal 123` → Tu dirección
- `CP 1234` → Tu código postal

### 5. **Configurar Links de Staff**

En **nosotros.html**, actualiza:

```html
<!-- Línea ~195 -->
<a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank">WhatsApp</a>
<a href="mailto:your.email@example.com">Email</a>
```

---

## 🎯 Colores y Estilos

```css
--primary-color: #1a1a1a /* Gris oscuro corporativo */
  --secondary-color: #d4af37 /* Dorado premium */ --dark-bg: #0f0f0f
  /* Fondo muy oscuro */ --light-text: #e0e0e0 /* Texto claro */;
```

---

## 📱 Responsividad

- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: Menor a 768px

Todos los componentes se adaptan automáticamente.

---

## 💻 Funciones JavaScript

### `renderServices()`

Renderiza dinámicamente los 8 servicios desde el Array.

### `setupJoinForm()`

- Muestra/oculta textarea cuando se selecciona "Otros"
- Valida campos requeridos
- Almacena datos en localStorage
- Muestra mensaje de éxito

### `setupContactForm()`

Valida y procesa formulario de contacto.

### `setActiveNavLink()`

Marca la página activa en el navegador.

---

## 🔧 Integración con Backend (Opcional)

Para enviar datos a un servidor, descomenta en **script.js** (línea ~220+):

```javascript
const result = await sendToServer("/api/solicitudes", formData);
```

Y configura tu endpoint.

---

## 📧 Datos Que Se Recopilan

### Formulario Join-Us (join-us.html)

- Nombre completo
- Email
- Teléfono
- Tipo de vehículo
- Servicio seleccionado
- Consulta especial (si elige "Otros")
- Comentarios adicionales

### Formulario Contacto (contacto.html)

- Nombre
- Email
- Teléfono
- Tipo de vehículo
- Asunto
- Mensaje

Los datos se guardan en `localStorage` con keys:

- `autolook_last_request` (Join-Us)
- `autolook_contact_message` (Contacto)

---

## ✨ Características Destacadas

✅ Navegación sticky header
✅ Hero con overlay y CTA
✅ Grid responsive
✅ Formularios validados
✅ Google Maps integrado
✅ Social links en header y footer
✅ Animaciones suaves en hover
✅ Sombras y profundidad visual
✅ Tipografía profesional
✅ Colores premium cohesivos

---

## 🚀 Próximos Pasos

1. **Agregar imágenes** en `assets/images/`
2. **Actualizar información de contacto** en todos los archivos
3. **Configurar Google Maps** en contacto.html
4. **Personalizar nombres de staff** en nosotros.html
5. **Configurar enlaces de WhatsApp/Email** en staff-cards
6. **Integrar con backend** si tienes servidor (opcional)
7. **Probar en diferentes navegadores** y dispositivos

---

## 📄 Licencia

Proyecto Autolook © 2024. Todos los derechos reservados.

---

## 💡 Notas

- El diseño está optimizado para ser impactante y profesional
- Los espacios para imágenes están claramente marcados en comentarios HTML
- Todos los formularios validan datos en el cliente
- El código es modular y fácil de personalizar
- No requiere dependencias externas (vanilla HTML/CSS/JS)

---

**¿Necesitas ayuda?** Revisa los comentarios en los archivos HTML y JS para instrucciones específicas.
