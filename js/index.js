/**
 * =====================================
 * AUTOLOOK - MAIN APPLICATION FILE
 * AUTOLOOK - ARCHIVO PRINCIPAL DE LA APLICACIÓN
 * =====================================
 * Central entry point that initializes all modules.
 * Punto de entrada central que inicializa todos los módulos.
 *
 * Module imports and initialization order matters for dependencies.
 * El orden de importaciones e inicialización es importante para dependencias.
 */

// Import all modules
// Importa todos los módulos
import { initNavigation, setActiveNavLink } from './modules/navigation.js';
import { renderServices } from './modules/services.js';
import { setupJoinForm } from './modules/forms.js';
import { logInit } from './utils/helpers.js';

/**
 * Initializes the entire application
 * Inicializa toda la aplicación
 * Called when DOM is fully loaded
 * Llamado cuando el DOM está completamente cargado
 * @returns {void}
 */
function initializeApp() {
  logInit('Initializing application...');

  // Initialize navigation (must be first for menu interaction)
  // Inicializa navegación (debe ser primero para interacción del menú)
  initNavigation();
  setActiveNavLink();

  // Render services (only runs if services container exists)
  // Renderiza servicios (solo se ejecuta si existe el contenedor de servicios)
  renderServices();

  // Setup form handlers (only runs if form exists)
  // Configura manejadores de formularios (solo se ejecuta si existe el formulario)
  setupJoinForm();

  logInit('Application ready!');
}

/**
 * Wait for DOM to be fully loaded before initializing
 * Espera a que el DOM esté completamente cargado antes de inicializar
 */
document.addEventListener('DOMContentLoaded', initializeApp);
