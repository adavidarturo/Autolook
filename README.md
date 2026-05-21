# AUTOLOOK - Premium Automotive Detailing Website

## 📋 Descripción General

Website profesional de 5 páginas para **Autolook**, empresa especializada en detailing automotriz premium. Diseño moderno con estética de lujo, totalmente responsive y con funcionalidad dinámica. **Refactorizado con estructura modular y código bien documentado en inglés y español.**

---

## 🏗️ Estructura del Proyecto (ACTUALIZADO - Estructura Modular)

```
Autolook/
├── index.html                 # Página de inicio (Hero + Resumen de servicios)
├── servicios.html             # Listado completo de 11 servicios
├── nosotros.html              # About page con Misión/Visión/Staff/Logros
├── contacto.html              # Página de contacto con Google Maps + Info
├── join-us.html               # Formulario de solicitud de servicios
│
├── css/                        # Estilos segmentados (ACTUALIZADO)
│   ├── 1-variables.css         # Variables CSS, temas, spacing
│   ├── 2-reset.css             # Reset global y estilos base
│   ├── 4-header.css            # Header, navbar, menú hamburguesa
│   ├── 5-hero.css              # Secciones hero
│   ├── 6-components.css        # Botones, cards, componentes reutilizables
│   ├── 7-sections.css          # Servicios, staff, logros, valores
│   ├── 8-forms.css             # Formularios y validación
│   ├── 9-footer.css            # Footer
│   ├── 10-responsive.css       # Media queries (tablet/mobile)
│   └── styles.css              # Hub principal (importa todo)
│
├── js/                         # JavaScript modular (ACTUALIZADO)
│   ├── config/
│   │   └── constants.js        # Datos centralizados (servicios, URLs, reglas)
│   ├── modules/
│   │   ├── navigation.js       # Menú hamburguesa y navegación activa
│   │   ├── services.js         # Renderización de servicios
│   │   └── forms.js            # Lógica de formularios con validación
│   ├── utils/
│   │   └── helpers.js          # Funciones auxiliares reutilizables
│   └── index.js                # Archivo principal orquestador
│
└── assets/
    ├── images/                 # Imágenes del sitio
    │   ├── heroImageIndex.jpg
    │   ├── ceramica-1.webp
    │   ├── polarizado-1.webp
    │   └── ... (más imágenes de servicios)
    └── svgs/                   # Iconos SVG (opcional)
```

---


### ❌ **NO ELIMINAR - SON NECESARIAS:**

- ✔️ `css/` - Contiene toda la presentación visual segmentada
- ✔️ `js/` - Lógica de la aplicación (config, modules, utils)
- ✔️ `assets/images/` - Imágenes del sitio (necesarias para funcionalidad)
- ✔️ Archivos `.html` - Contenido de las páginas


---

## 🎨 Características Principales

### ✅ **5 Páginas HTML Completas**

- **Index**: Hero impactante + resumen de servicios destacados
- **Servicios**: Listado completo de 11 servicios con renderización dinámica
- **About (Nosotros)**: Misión/Visión, staff profesional, logros, valores
- **Contacto**: Google Maps integrado + formulario + información
- **Join-Us**: Formulario de solicitud con validación inteligente

### ✅ **Array de 11 Servicios Dinámicos**

- Recubrimiento Cerámico
- PPF (Paint Protection Film)
- Empapelado/Wrapping
- Polarizados (3M, Stek)
- Limpieza Profunda
- Lavado Premium PH Neutro
- Pulido Profesional
- Tapicería
- Restauración de Plásticos
- Chapa y Pintura Express
- Actualización de Formato

### ✅ **Funcionalidad JavaScript (Modular & Documentada)**

| Módulo | Función | Archivo |
|--------|---------|---------|
| **Navigation** | Menú hamburguesa, nav activa | `modules/navigation.js` |
| **Services** | Renderización dinámica de servicios | `modules/services.js` |
| **Forms** | Validación y WhatsApp integration | `modules/forms.js` |
| **Helpers** | Utilidades reutilizables | `utils/helpers.js` |
| **Constants** | Datos centralizados | `config/constants.js` |

### ✅ **Diseño Premium**

- Colores cyan (#0ca5b9) y tonos oscuros
- Responsive design (Mobile, Tablet, Desktop)
- Animaciones suaves en transiciones
- Botones de acción prominentes (cyan)
- Header sticky con navegación clara
- Footer con enlaces e información

---

## 📝 Actualización - Comentarios Bilingües

Toda el código incluye comentarios detallados en **INGLÉS Y ESPAÑOL**:

- **Funciones**: JSDoc con @param y @returns
- **Secciones**: Comentarios explicativos de bloques
- **Variables complejas**: Notas sobre propósito y uso
- **CSS**: Explicaciones de valores y propósitos

**Ejemplo en JavaScript:**
```js
/**
 * Toggles mobile menu visibility
 * Alterna la visibilidad del menú móvil
 * @param {Event} e - Click event
 * @returns {void}
 */
```

**Ejemplo en CSS:**
```css
/* Logo size responsive / Tamaño del logo responsivo */
--logo-size: 60px;
```

---

## 🖼️ Espacios para Imágenes

### 1. **Hero Image (index.html)**

- **Ubicación**: `assets/images/heroImageIndex.jpg`
- **Tamaño recomendado**: 1920x1080 px (mínimo 1920x500 px)
- **Tema**: Auto lujoso, detailing en proceso, garage premium
- **Actualizar en HTML**: Línea ~86

### 2. **Servicios (index.html - Destacados)**

- **Ubicación**: `assets/images/[servicio].webp`
- **Tamaño**: 500x300 px
- **Ejemplos**: ceramica-1.webp, polarizado-1.webp, chapa_pintura-1.webp

### 3. **Servicios Completos (servicios.html)**

Se renderizan dinámicamente desde el array en `js/config/constants.js`:
- Cada servicio debe tener su imagen en `assets/images/`
- Las rutas se definen en el array de SERVICES

### 4. **Google Maps (contacto.html)**

- Ve a: https://www.google.com/maps
- Busca tu ubicación
- Haz clic en "Compartir" → "Insertar un mapa"
- Reemplaza el `src` del iframe en contacto.html (línea ~120)

---

## 📱 Responsive Design

| Dispositivo | Ancho | Cambios |
|-------------|-------|---------|
| **Desktop** | 1200px+ | Diseño completo, menú normal |
| **Tablet** | 768px - 1199px | Menú hamburguesa, ajustes de tamaño |
| **Mobile** | <768px | Diseño optimizado, espacios reducidos |

Todos los componentes se adaptan automáticamente usando CSS Grid y Flexbox.

---

## 🔧 Cómo Personalizar

### 1. **Actualizar Información de Contacto**

Busca y reemplaza en TODOS los archivos:

```
+591 77371633 → Tu teléfono
autolook.tuconsentida@gmail.com → Tu email
Ubicación → Tu dirección
```

**Archivos donde buscar:**
- `*.html` (headers, footers)
- `js/config/constants.js` (WHATSAPP_NUMBER)

### 2. **Modificar Servicios**

Edita el array en `js/config/constants.js`:

```javascript
export const SERVICES = [
  {
    id: 'tu-servicio',
    name: 'Nombre del Servicio',
    description: 'Descripción...',
    price: 'Desde $XXX',
    image: 'nombre-imagen.webp',
    features: ['Característica 1', 'Característica 2', ...]
  }
  // ... más servicios
];
```

### 3. **Cambiar Colores del Tema**

Edita `css/1-variables.css`:

```css
:root {
  --primary-color: #1a1a1a;      /* Fondo oscuro */
  --secondary-color: #0ca5b9;    /* Color cyan (botones) */
  --light-text: #e0e0e0;         /* Texto claro */
  --border-color: #333;          /* Bordes */
  /* ... más variables */
}
```

### 4. **Integración Backend (Opcional)**

El formulario actualmente envía datos a WhatsApp. Para agregar backend:

En `js/modules/forms.js`, descomenta la línea ~100 y configura tu endpoint:

```javascript
const result = await sendToServer('/api/solicitudes', storedData);
```

---

## 📊 Estadísticas del Código

| Métrica | Valor |
|---------|-------|
| **Líneas de CSS** | ~1700+ (bien documentadas) |
| **Líneas de JS** | ~600+ (modular) |
| **Archivos CSS** | 10 (segmentados) |
| **Módulos JS** | 6 (config, modules, utils) |
| **Comentarios Bilingües** | 150+ |
| **Servicios Dinámicos** | 11 |
| **Páginas HTML** | 5 |

---

## 🚀 Cómo Estudiar Este Proyecto

### **Orden Recomendado (De lo General a lo Específico):**

#### **1. ESTRUCTURA & ARQUITECTURA (5 min)**
- Leer: `README.md` (este archivo)
- Revisar: Estructura de carpetas
- Entender: Flujo modular de JS

#### **2. CONFIGURACIÓN (5 min)**
- Leer: `js/config/constants.js`
- Ver: Array de servicios, URLs, validaciones
- Entender: Datos centralizados

#### **3. ESTILOS BASE (10 min)**
- Leer: `css/1-variables.css` (variables y temas)
- Leer: `css/2-reset.css` (reset global)
- Leer: `css/6-components.css` (componentes reutilizables)

#### **4. LAYOUT & COMPONENTES (15 min)**
- Leer: `css/4-header.css` (navegación)
- Leer: `css/5-hero.css` (secciones hero)
- Leer: `css/7-sections.css` (contenido principal)
- Leer: `css/8-forms.css` (formularios)
- Leer: `css/9-footer.css` (footer)
- Leer: `css/10-responsive.css` (media queries)

#### **5. FUNCIONALIDAD JAVASCRIPT (20 min)**
- Leer: `js/utils/helpers.js` (funciones auxiliares)
- Leer: `js/modules/navigation.js` (menú)
- Leer: `js/modules/services.js` (servicios)
- Leer: `js/modules/forms.js` (formularios) ← MÁS COMPLEJO
- Leer: `js/index.js` (orquestador)

#### **6. HTML (10 min)**
- Revisar: `index.html` (estructura completa)
- Revisar: `servicios.html` (renderización dinámica)
- Revisar: Otras páginas

#### **7. FLUJO COMPLETO (5 min)**
- Desde HTML → JavaScript → CSS
- Cómo se renderizan servicios
- Cómo funcionan formularios

**Tiempo Total: ~70 minutos para comprensión profunda**

---

## 🔐 Datos Recopilados (Privacidad)

### Formulario Join-Us (join-us.html)

- Nombre, Email, Teléfono
- Tipo de vehículo
- Servicio seleccionado
- Comentarios especiales
- **Almacenamiento**: localStorage (`autolook_last_request`)

### Formulario Contacto (contacto.html)

- Nombre, Email, Teléfono
- Asunto, Mensaje
- **Almacenamiento**: localStorage

**NOTA**: Los datos se guardan localmente. No se envían servidores externos (solo a WhatsApp si clickean el botón).

---

## 🎯 Funciones Principales Explicadas

### `initNavigation()` (modules/navigation.js)
Maneja el menú hamburguesa: toggle, cierre al hacer click en link, cierre al clickear afuera.

### `setActiveNavLink()` (modules/navigation.js)
Resalta el enlace de navegación según la página actual.

### `renderServices()` (modules/services.js)
Recorre el array SERVICES y genera dinámicamente tarjetas HTML.

### `setupJoinForm()` (modules/forms.js)
Validación completa del formulario + integración WhatsApp:
- Valida todos los campos
- Detecta si es móvil o desktop
- Genera enlace WhatsApp
- Guarda en localStorage

### Funciones Helper (utils/helpers.js)
- `validateEmail()` - Validación de email
- `validateMinLength()` - Validación de longitud
- `generateWhatsAppURL()` - Crea enlace WhatsApp
- `saveToLocalStorage()` - Guarda datos locales
- `getCurrentDateTime()` - Fecha/hora actual

---

## ✨ Características Destacadas

✅ Navegación sticky header  
✅ Hero con overlay dinámico  
✅ Grid responsive completo  
✅ Formularios con validación avanzada  
✅ Google Maps integrado  
✅ Social links en header y footer  
✅ Animaciones suaves en hover  
✅ Sombras y profundidad visual  
✅ Tipografía profesional  
✅ Código modular y bien documentado  
✅ Comentarios bilingües (EN/ES)  
✅ Estructura escalable para nuevas features  

---

## 📚 Recursos Útiles

- **Cambiar Google Maps**: https://www.google.com/maps
- **Comprimir imágenes**: https://tinypng.com/
- **Validador HTML**: https://validator.w3.org/
- **Validador CSS**: https://jigsaw.w3.org/css-validator/
- **DevTools Chrome**: F12 en el navegador

---

## 📄 Licencia

Proyecto Autolook © 2026. Todos los derechos reservados.

---

## 💡 Notas Finales

- ✅ Código refactorizado en estructura modular
- ✅ Comentarios bilingües en todo el código
- ✅ Fácil de entender y mantener
- ✅ Escalable para agregar nuevas features
- ✅ No requiere dependencias externas (vanilla HTML/CSS/JS ES6)

**¿Necesitas ayuda?** Los archivos tienen comentarios detallados. Sigue el orden recomendado en "Cómo Estudiar Este Proyecto".
