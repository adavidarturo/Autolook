/**
 * =====================================
 * NAVIGATION MODULE
 * MÓDULO DE NAVEGACIÓN
 * =====================================
 * Handles hamburger menu and active navigation highlighting.
 * Gestiona el menú hamburguesa y el resaltado de navegación activa.
 */

/**
 * Initializes hamburger menu and navigation event listeners
 * Inicializa el menú hamburguesa y event listeners de navegación
 * Handles: Menu toggle, closing menu on link click, closing menu on outside click
 * Maneja: Alternar menú, cerrar menú al hacer clic en enlace, cerrar al hacer clic fuera
 * @returns {void}
 */
export function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  // Toggle mobile menu when hamburger is clicked
  // Alterna el menú móvil cuando se hace clic en la hamburguesa
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when a navigation link is clicked
  // Cierra el menú móvil cuando se hace clic en un enlace de navegación
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (hamburgerBtn) {
        hamburgerBtn.classList.remove('active');
      }
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking outside the navbar
  // Cierra el menú móvil al hacer clic fuera de la barra de navegación
  document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    if (!e.target.closest('.navbar') &&
        !e.target.closest('#hamburgerBtn') &&
        mobileMenu &&
        mobileMenu.classList.contains('active')) {
      if (hamburgerBtn) {
        hamburgerBtn.classList.remove('active');
      }
      mobileMenu.classList.remove('active');
    }
  });
}

/**
 * Sets active navigation link based on current page
 * Establece el enlace de navegación activo basado en la página actual
 * Highlights the link that matches the current page URL
 * Resalta el enlace que coincide con la URL de la página actual
 * @returns {void}
 */
export function setActiveNavLink() {
  // Get current page name from URL
  // Obtiene el nombre de la página actual desde la URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Remove active class from all links
  // Elimina la clase activa de todos los enlaces
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to matching link
  // Agrega la clase activa al enlace coincidente
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    // Match current page or index.html for home
    // Coincide con página actual o index.html para inicio
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
