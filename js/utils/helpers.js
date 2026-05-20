/**
 * =====================================
 * UTILITY FUNCTIONS
 * FUNCIONES AUXILIARES
 * =====================================
 * Shared helper functions used across modules.
 * Funciones auxiliares compartidas utilizadas en múltiples módulos.
 */

import { VALIDATION_RULES, WHATSAPP_NUMBER, WHATSAPP_APP_PROTOCOL, WHATSAPP_BASE_URL } from '../config/constants.js';

/**
 * Validates a string against minimum length requirement
 * Valida una cadena contra el requisito de longitud mínima
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} True if valid
 */
export function validateMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

/**
 * Validates email format using regex pattern
 * Valida el formato de email usando un patrón regex
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export function validateEmail(email) {
  return VALIDATION_RULES.email.pattern.test(email);
}

/**
 * Encodes text for URL usage (WhatsApp messages)
 * Codifica texto para uso en URL (mensajes de WhatsApp)
 * @param {string} text - Text to encode
 * @returns {string} Encoded text
 */
export function encodeForURL(text) {
  return encodeURIComponent(text);
}

/**
 * Detects if device is mobile based on user agent
 * Detecta si el dispositivo es móvil basándose en el user agent
 * @returns {boolean} True if mobile device detected
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Generates WhatsApp URL for contact
 * Genera URL de WhatsApp para contacto
 * @param {string} message - Message to send
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppURL(message) {
  const encodedMessage = encodeForURL(message);
  const isMobile = isMobileDevice();

  if (isMobile) {
    return `${WHATSAPP_APP_PROTOCOL}?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
  } else {
    return `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
}

/**
 * Clears all error messages from form
 * Limpia todos los mensajes de error del formulario
 * @returns {void}
 */
export function clearFormErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
  });
}

/**
 * Displays error message in specific form field
 * Muestra mensaje de error en campo de formulario específico
 * @param {string} fieldId - ID of error element
 * @param {string} message - Error message to display
 * @returns {void}
 */
export function displayError(fieldId, message) {
  const errorElement = document.getElementById(fieldId);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

/**
 * Sends data to server endpoint (optional backend integration)
 * Envía datos a punto final del servidor (integración opcional con backend)
 * @param {string} endpoint - API endpoint URL
 * @param {Object} data - Data to send
 * @returns {Promise<Object|null>} Server response or null on error
 */
export async function sendToServer(endpoint, data) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Error al enviar datos');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en sendToServer:', error);
    return null;
  }
}

/**
 * Saves form data to localStorage
 * Guarda datos del formulario en localStorage
 * @param {string} key - localStorage key
 * @param {Object} data - Data to save
 * @returns {void}
 */
export function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

/**
 * Retrieves data from localStorage
 * Recupera datos de localStorage
 * @param {string} key - localStorage key
 * @returns {Object|null} Parsed data or null if not found
 */
export function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

/**
 * Formats current date and time in Spanish locale
 * Formatea la fecha y hora actual en formato de locale Español
 * @returns {string} Formatted date and time
 */
export function getCurrentDateTime() {
  return new Date().toLocaleString('es-ES');
}

/**
 * Scrolls to element smoothly
 * Desplaza hacia un elemento suavemente
 * @param {HTMLElement} element - Element to scroll to
 * @param {number} offset - Offset in pixels (default: 0)
 * @returns {void}
 */
export function smoothScroll(element, offset = 0) {
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (offset) window.scrollBy(0, -offset);
    }, 100);
  }
}

/**
 * Gets selected option text from select element
 * Obtiene el texto de la opción seleccionada de un elemento select
 * @param {HTMLSelectElement} selectElement - Select element
 * @returns {string} Selected option text
 */
export function getSelectOptionText(selectElement) {
  return selectElement.options[selectElement.selectedIndex].text;
}

/**
 * Logs application initialization message
 * Registra mensaje de inicialización de la aplicación
 * @param {string} message - Message to log
 * @returns {void}
 */
export function logInit(message) {
  console.log(`[Autolook] ${message}`);
}
