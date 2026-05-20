/**
 * =====================================
 * CONFIGURATION & CONSTANTS
 * CONFIGURACIÓN Y CONSTANTES
 * =====================================
 * Central configuration file for all application constants.
 * Archivo central de configuración de todas las constantes de la aplicación.
 */

/**
 * WhatsApp business number and URLs
 * Número de WhatsApp comercial y URLs
 */
export const WHATSAPP_NUMBER = '59177371633';
export const WHATSAPP_BASE_URL = 'https://wa.me';
export const WHATSAPP_APP_PROTOCOL = 'whatsapp://send';

/**
 * Social media links
 * Enlaces de redes sociales
 */
export const SOCIAL_MEDIA = {
  tiktok: 'https://www.tiktok.com/@autolook.scz.bo?_r=1&_t=ZS-94Fgkb2NwFr',
  facebook: 'https://www.facebook.com/share/1KjZVzbSiW/?mibextid=wwXIfr',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20quiero%20más%20información`
};

/**
 * Services array - Central data source for all service information
 * Array de servicios - Fuente central de datos para toda la información de servicios
 * Used in: servicios.html (renderServices), join-us.html (form options)
 */
export const SERVICES = [
  {
    id: 'ceramic-coating',
    name: 'Recubrimiento Cerámico y Nanografeno',
    description: 'Aplicación de capas protectoras de última tecnología que crean un escudo ultraduro y brillante sobre la pintura.',
    price: 'Desde  $150',
    image: 'ceramica-1.webp',
    features: ['Dureza Extrema', 'Efecto Hidrofóbico', 'Brillo Espejo', 'Resistencia UV']
  },
  {
    id: 'ppf',
    name: 'PPF (Paint Protection Film)',
    description: 'Instalación de película de poliuretano transparente y autocurativa para proteger la carrocería de impactos físicos.',
    price: 'Desde  $250',
    image: 'ppf-2.webp',
    features: ['Autocuración', 'Anti-Impactos', 'Invisible', 'Garantía Larga Duración']
  },
  {
    id: 'wrapping',
    name: 'Empapelado / Wrapping',
    description: 'Cambio de color o personalización total del vehículo mediante vinilos de alta calidad.',
    price: 'Evaluacion previa',
    image: 'empapelado-2.jpg',
    features: ['Personalización Total', 'Reversible', 'Protección Ligera', 'Cambio de Look Rápido']
  },
  {
    id: 'polarizados',
    name: 'Polarizados (3M, Stek)',
    description: 'Instalación de láminas de control solar de marcas premium para mejorar confort y privacidad.',
    price: 'Desde $180',
    image: 'polarizado-1.webp',
    features: ['Rechazo Térmico', 'Filtro UV', 'Seguridad', 'Privacidad']
  },
  {
    id: 'limpieza-profunda',
    name: 'Limpieza Profunda',
    description: 'Higienización exhaustiva de cada rincón del vehículo, eliminando suciedad acumulada.',
    price: 'Desde $120',
    image: 'limpieza-2.jpg',
    features: ['Desinfección', 'Detallado de Ductos', 'Maquinaria Profesional', 'Renovación Total']
  },
  {
    id: 'lavado-premium',
    name: 'Lavado Premium PH Neutro',
    description: 'Lavado técnico artesanal utilizando productos que respetan los tratamientos previos de la pintura.',
    price: 'Desde $20',
    image: 'lavado-2.webp',
    features: ['Seguridad PH Neutro', 'Técnica de Dos Baldes', 'Cuidado de Llantas', 'Secado Seguro']
  },
  {
    id: 'pulido-profesional',
    name: 'Pulido Profesional',
    description: 'Proceso de corrección de pintura para eliminar imperfecciones y devolver la suavidad al tacto.',
    price: 'Desde $100',
    image: 'pulido-2.webp',
    features: ['Corrección de Defectos', 'Nivelación', 'Claridad Óptica', 'Preparación Ideal']
  },
  {
    id: 'tapiceria',
    name: 'Tapicería',
    description: 'Reparación, limpieza y renovación de asientos y revestimientos interiores.',
    price: 'Desde $350',
    image: 'tapiceria-2.webp',
    features: ['Cuidado de Cuero', 'Lavado de Tela', 'Tratamiento de Alfombras', 'Preservación']
  },
  {
    id: 'restauracion-plasticos',
    name: 'Restauración de Plásticos',
    description: 'Recuperación del color y textura original de las superficies plásticas desgastadas.',
    price: 'Desde $70',
    image: 'tablero-2.jpg',
    features: ['Hidratación', 'Acabado Original', 'Capa Protectora', 'Estética Coherente']
  },
  {
    id: 'chapa-pintura',
    name: 'Chapa y Pintura Express',
    description: 'Reparaciones rápidas de abolladuras y pintura para daños focalizados.',
    price: 'Desde $120',
    image: 'chapa_pintura-1.webp',
    features: ['Rapidez', 'Igualación de Color', 'Calidad de Taller', 'Eficiencia']
  },
  {
    id: 'actualizacion-formato',
    name: 'Actualización de Formato',
    description: 'Modernización estética del vehículo mediante cambio de piezas o detalles de diseño.',
    price: 'Evaluacion previa',
    image: '',
    features: ['Facelift Visual', 'Cambio de Emblemas', 'Chrome Delete', 'Modernización']
  }
];

/**
 * Form validation patterns and messages
 * Patrones de validación de formularios y mensajes
 */
export const VALIDATION_RULES = {
  name: {
    minLength: 3,
    errorMessage: 'El nombre debe tener al menos 3 caracteres'
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'Por favor ingresa un email válido'
  },
  phone: {
    minLength: 8,
    errorMessage: 'Por favor ingresa un teléfono válido'
  },
  otros: {
    minLength: 10,
    errorMessage: 'Por favor describe mejor tu consulta (mínimo 10 caracteres)'
  }
};

/**
 * LocalStorage keys
 * Claves de localStorage
 */
export const LOCAL_STORAGE_KEYS = {
  lastRequest: 'autolook_last_request'
};

/**
 * Application metadata
 * Metadatos de la aplicación
 */
export const APP_NAME = 'Autolook';
export const APP_VERSION = '1.0.0';
