/**
 * =====================================
 * FORMS MODULE
 * MÓDULO DE FORMULARIOS
 * =====================================
 * Handles form validation and submission logic.
 * Maneja la validación de formularios y lógica de envío.
 */

import {
  validateMinLength,
  validateEmail,
  clearFormErrors,
  displayError,
  generateWhatsAppURL,
  saveToLocalStorage,
  getCurrentDateTime,
  getSelectOptionText,
  smoothScroll
} from '../utils/helpers.js';

import {
  VALIDATION_RULES,
  LOCAL_STORAGE_KEYS
} from '../config/constants.js';

/**
 * Initializes join form with event listeners
 * Inicializa el formulario de unirse con event listeners
 * Handles: Show/hide "Otros" textarea, form validation, WhatsApp integration
 * Maneja: Mostrar/ocultar textarea "Otros", validación, integración WhatsApp
 * @returns {void}
 */
export function setupJoinForm() {
  const form = document.getElementById('joinForm');

  // Exit if form doesn't exist (not on join-us page)
  // Salir si el formulario no existe (no está en página join-us)
  if (!form) return;

  const serviceSelect = document.getElementById('join-service');
  const otrosContainer = document.getElementById('otros-container');
  const otrosInput = document.getElementById('join-otros');

  // Show/hide "Otros" textarea when "otros" service is selected
  // Mostrar/ocultar textarea "Otros" cuando se selecciona servicio "otros"
  if (serviceSelect) {
    serviceSelect.addEventListener('change', function() {
      if (this.value === 'otros') {
        if (otrosContainer) otrosContainer.style.display = 'block';
        if (otrosInput) otrosInput.required = true;
      } else {
        if (otrosContainer) otrosContainer.style.display = 'none';
        if (otrosInput) {
          otrosInput.required = false;
          otrosInput.value = '';
        }
      }
    });
  }

  // Handle form submission
  // Maneja el envío del formulario
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmit(form);
  });
}

/**
 * Validates and processes form submission
 * Valida y procesa el envío del formulario
 * @param {HTMLFormElement} form - Form element to process
 * @returns {void}
 */
function handleFormSubmit(form) {
  // Get form field values
  // Obtiene los valores de los campos del formulario
  const name = document.getElementById('join-name')?.value.trim() || '';
  const email = document.getElementById('join-email')?.value.trim() || '';
  const phone = document.getElementById('join-phone')?.value.trim() || '';
  const service = document.getElementById('join-service')?.value || '';
  const otros = document.getElementById('join-otros')?.value.trim() || '';
  const terms = document.getElementById('join-terms')?.checked || false;

  // Clear previous errors
  // Limpia errores previos
  clearFormErrors();

  // Validate form fields
  // Valida los campos del formulario
  const errors = validateFormFields(name, email, phone, service, otros, terms);

  // If there are validation errors, display them and return
  // Si hay errores de validación, mostrarlos y retornar
  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([fieldId, message]) => {
      displayError(fieldId, message);
    });
    return;
  }

  // Form is valid, proceed with submission
  // El formulario es válido, proceder con el envío
  processValidFormSubmission(form, {
    name,
    email,
    phone,
    service,
    otros
  });
}

/**
 * Validates all form fields
 * Valida todos los campos del formulario
 * @param {string} name - Customer name
 * @param {string} email - Customer email
 * @param {string} phone - Customer phone
 * @param {string} service - Selected service
 * @param {string} otros - Other service description (if applicable)
 * @param {boolean} terms - Terms acceptance
 * @returns {Object} Object with error field IDs as keys and messages as values
 */
function validateFormFields(name, email, phone, service, otros, terms) {
  const errors = {};

  // Validate name
  // Valida nombre
  if (!validateMinLength(name, VALIDATION_RULES.name.minLength)) {
    errors['error-name'] = VALIDATION_RULES.name.errorMessage;
  }

  // Validate email
  // Valida email
  if (!validateEmail(email)) {
    errors['error-email'] = VALIDATION_RULES.email.errorMessage;
  }

  // Validate phone
  // Valida teléfono
  if (!validateMinLength(phone, VALIDATION_RULES.phone.minLength)) {
    errors['error-phone'] = VALIDATION_RULES.phone.errorMessage;
  }

  // Validate service selection
  // Valida selección de servicio
  if (!service) {
    errors['error-service'] = 'Selecciona un servicio';
  }

  // Validate "otros" field if needed
  // Valida campo "otros" si es necesario
  if (service === 'otros' && !validateMinLength(otros, VALIDATION_RULES.otros.minLength)) {
    errors['error-otros'] = VALIDATION_RULES.otros.errorMessage;
  }

  // Validate terms acceptance
  // Valida aceptación de términos
  if (!terms) {
    errors['error-terms'] = 'Debes aceptar los términos y condiciones';
  }

  return errors;
}

/**
 * Processes valid form submission
 * Procesa el envío válido del formulario
 * Sends data to WhatsApp and saves to localStorage
 * Envía datos a WhatsApp y guarda en localStorage
 * @param {HTMLFormElement} form - Form element
 * @param {Object} formData - Form data object
 * @returns {void}
 */
function processValidFormSubmission(form, formData) {
  const {
    name,
    email,
    phone,
    service,
    otros
  } = formData;

  // Get optional fields
  // Obtiene campos opcionales
  const vehicle = document.getElementById('join-vehicle')?.value.trim() || null;
  const message = document.getElementById('join-message')?.value.trim() || null;
  const serviceSelect = document.getElementById('join-service');
  const serviceName = getSelectOptionText(serviceSelect);

  // Build WhatsApp message with formatting
  // Construye mensaje de WhatsApp con formato
  let whatsappMessage = buildWhatsAppMessage({
    name,
    email,
    phone,
    vehicle,
    serviceName,
    otros: otros || null,
    message: message || null
  });

  // Generate WhatsApp URL (detects mobile vs desktop)
  // Genera URL de WhatsApp (detecta móvil vs escritorio)
  const whatsappURL = generateWhatsAppURL(whatsappMessage);

  // Prepare data for localStorage
  // Prepara datos para localStorage
  const storedData = {
    nombre: name,
    email: email,
    telefono: phone,
    vehiculo: vehicle,
    servicio: serviceName,
    consulta_especial: otros || null,
    mensaje: message || null,
    fecha: getCurrentDateTime()
  };

  // Save to localStorage
  // Guarda en localStorage
  saveToLocalStorage(LOCAL_STORAGE_KEYS.lastRequest, storedData);

  // Show success message
  // Muestra mensaje de éxito
  const formElement = form;
  const successElement = document.getElementById('form-success');

  if (formElement) formElement.style.display = 'none';
  if (successElement) successElement.style.display = 'block';

  // Scroll to success message
  // Desplaza a mensaje de éxito
  if (successElement) {
    smoothScroll(successElement);
  }

  // Open WhatsApp in new tab after delay
  // Abre WhatsApp en nueva pestaña después de demora
  setTimeout(() => {
    window.open(whatsappURL, '_blank');
  }, 1500);
}

/**
 * Builds formatted WhatsApp message from form data
 * Construye mensaje formateado de WhatsApp desde datos del formulario
 * @param {Object} data - Form data object
 * @returns {string} Formatted WhatsApp message
 */
function buildWhatsAppMessage(data) {
  const { name, email, phone, vehicle, serviceName, otros, message } = data;

  let msg = `📋 *NUEVA SOLICITUD DE SERVICIO*\n\n`;
  msg += `👤 *Nombre:* ${name}\n`;
  msg += `📧 *Email:* ${email}\n`;
  msg += `📱 *Teléfono:* ${phone}\n`;

  if (vehicle) {
    msg += `🚗 *Vehículo:* ${vehicle}\n`;
  }

  msg += `🔧 *Servicio Solicitado:* ${serviceName}\n`;

  if (otros) {
    msg += `💬 *Consulta Especial:* ${otros}\n`;
  }

  if (message) {
    msg += `📝 *Comentarios Adicionales:* ${message}\n`;
  }

  msg += `\n⏰ *Fecha:* ${getCurrentDateTime()}\n`;
  msg += `\n---\n`;
  msg += `_Solicitud generada desde el formulario web oficial de Autolook_`;

  return msg;
}
