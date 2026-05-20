/**
 * =====================================
 * SERVICES MODULE
 * MÓDULO DE SERVICIOS
 * =====================================
 * Renders service cards dynamically from data.
 * Renderiza tarjetas de servicios dinámicamente desde datos.
 */

import { SERVICES } from '../config/constants.js';

/**
 * Renders all services into the services container
 * Renderiza todos los servicios en el contenedor de servicios
 * Called on: servicios.html page load
 * Llamado en: carga de página servicios.html
 * Creates cards with service info, image, price, and features
 * Crea tarjetas con info del servicio, imagen, precio y características
 * @returns {void}
 */
export function renderServices() {
  const container = document.getElementById('services-container');

  // Exit if container doesn't exist (not on services page)
  // Salir si el contenedor no existe (no está en página de servicios)
  if (!container) return;

  // Map services array to HTML card structure
  // Mapea el array de servicios a estructura HTML de tarjeta
  container.innerHTML = SERVICES.map(service => `
    <div class="service-card">
      <div class="service-card-image">
        ${service.image
          ? `<img src="assets/images/${service.image}" alt="${service.name}">`
          : `<p>${service.name}</p>`
        }
      </div>
      <div class="service-card-content">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <div class="service-price">${service.price}</div>
        <div class="service-features">
          ${service.features
            .map(feature => `<span style="display: block; font-size: 0.85rem; color: #0aaec4; margin: 0.25rem 0;">✓ ${feature}</span>`)
            .join('')
          }
        </div>
      </div>
    </div>
  `).join('');
}
