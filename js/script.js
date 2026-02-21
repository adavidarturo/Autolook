/* =====================================
   AUTOLOOK - Premium Automotive Detailing
   JavaScript - Lógica Global
   ===================================== */

// =====================================
// ARRAY DE SERVICIOS (11 Servicios)
// =====================================

const services = [
    {
        id: 'ceramic-coating',
        name: 'Recubrimiento Cerámico y Nanografeno',
        description: 'Aplicación de capas protectoras de última tecnología que crean un escudo ultraduro y brillante sobre la pintura.',
        price: '$$$',
        features: ['Dureza Extrema', 'Efecto Hidrofóbico', 'Brillo Espejo', 'Resistencia UV']
    },
    {
        id: 'ppf',
        name: 'PPF (Paint Protection Film)',
        description: 'Instalación de película de poliuretano transparente y autocurativa para proteger la carrocería de impactos físicos.',
        price: '$$$',
        features: ['Autocuración', 'Anti-Impactos', 'Invisible', 'Garantía Larga Duración']
    },
    {
        id: 'wrapping',
        name: 'Empapelado / Wrapping',
        description: 'Cambio de color o personalización total del vehículo mediante vinilos de alta calidad.',
        price: '$$',
        features: ['Personalización Total', 'Reversible', 'Protección Ligera', 'Cambio de Look Rápido']
    },
    {
        id: 'polarizados',
        name: 'Polarizados (3M, Stek)',
        description: 'Instalación de láminas de control solar de marcas premium para mejorar confort y privacidad.',
        price: '$$',
        features: ['Rechazo Térmico', 'Filtro UV', 'Seguridad', 'Privacidad']
    },
    {
        id: 'limpieza-profunda',
        name: 'Limpieza Profunda',
        description: 'Higienización exhaustiva de cada rincón del vehículo, eliminando suciedad acumulada.',
        price: '$$',
        features: ['Desinfección', 'Detallado de Ductos', 'Maquinaria Profesional', 'Renovación Total']
    },
    {
        id: 'lavado-premium',
        name: 'Lavado Premium PH Neutro',
        description: 'Lavado técnico artesanal utilizando productos que respetan los tratamientos previos de la pintura.',
        price: '$',
        features: ['Seguridad PH Neutro', 'Técnica de Dos Baldes', 'Cuidado de Llantas', 'Secado Seguro']
    },
    {
        id: 'pulido-profesional',
        name: 'Pulido Profesional',
        description: 'Proceso de corrección de pintura para eliminar imperfecciones y devolver la suavidad al tacto.',
        price: '$$',
        features: ['Corrección de Defectos', 'Nivelación', 'Claridad Óptica', 'Preparación Ideal']
    },
    {
        id: 'tapiceria',
        name: 'Tapicería',
        description: 'Reparación, limpieza y renovación de asientos y revestimientos interiores.',
        price: '$$',
        features: ['Cuidado de Cuero', 'Lavado de Tela', 'Tratamiento de Alfombras', 'Preservación']
    },
    {
        id: 'restauracion-plasticos',
        name: 'Restauración de Tablero / Plásticos',
        description: 'Recuperación del color y textura original de las superficies plásticas desgastadas.',
        price: '$',
        features: ['Hidratación', 'Acabado Original', 'Capa Protectora', 'Estética Coherente']
    },
    {
        id: 'chapa-pintura',
        name: 'Chapa y Pintura Express',
        description: 'Reparaciones rápidas de abolladuras y pintura para daños focalizados.',
        price: '$$',
        features: ['Rapidez', 'Igualación de Color', 'Calidad de Taller', 'Eficiencia']
    },
    {
        id: 'actualizacion-formato',
        name: 'Actualización de Formato',
        description: 'Modernización estética del vehículo mediante cambio de piezas o detalles de diseño.',
        price: '$$',
        features: ['Facelift Visual', 'Cambio de Emblemas', 'Chrome Delete', 'Modernización']
    }
];

// =====================================
// RENDERIZAR SERVICIOS (Servicios.html)
// =====================================

function renderServices() {
    const container = document.getElementById('services-container');

    if (!container) return; // Si no existe el contenedor, salir

    container.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-card-image">
                <!-- ESPACIO PARA IMAGEN: ${service.name}
                     Instrucciones:
                     1. Coloca una imagen JPG o WebP en assets/images/
                     2. Usa el nombre sugerido: ${service.id}.jpg
                     3. Tamaño recomendado: 400x250px (mínimo)
                     4. Reemplaza el comentario de abajo con: <img src="assets/images/${service.id}.jpg" alt="${service.name}">
                -->
                <p>${service.name}</p>
            </div>
            <div class="service-card-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">${service.price}</div>
                <div class="service-features">
                    ${service.features.map(feature => `<span style="display: block; font-size: 0.85rem; color: #0aaec4; margin: 0.25rem 0;">✓ ${feature}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// =====================================
// LÓGICA DE FORMULARIO JOIN-US
// =====================================

function setupJoinForm() {
    const form = document.getElementById('joinForm');
    const serviceSelect = document.getElementById('join-service');
    const otrosContainer = document.getElementById('otros-container');
    const otrosInput = document.getElementById('join-otros');

    // Si el formulario no existe, salir
    if (!form) return;

    // Mostrar/Ocultar textarea de "Otros"
    serviceSelect.addEventListener('change', function() {
        if (this.value === 'otros') {
            otrosContainer.style.display = 'block';
            otrosInput.required = true;
        } else {
            otrosContainer.style.display = 'none';
            otrosInput.required = false;
            otrosInput.value = '';
        }
    });

    // Validar y enviar formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validaciones básicas
        const name = document.getElementById('join-name').value.trim();
        const email = document.getElementById('join-email').value.trim();
        const phone = document.getElementById('join-phone').value.trim();
        const service = document.getElementById('join-service').value;
        const otros = document.getElementById('join-otros').value.trim();
        const terms = document.getElementById('join-terms').checked;

        let isValid = true;

        // Limpiar errores previos
        document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

        // Validar nombre
        if (name.length < 3) {
            document.getElementById('error-name').textContent = 'El nombre debe tener al menos 3 caracteres';
            isValid = false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Por favor ingresa un email válido';
            isValid = false;
        }

        // Validar teléfono
        if (phone.length < 8) {
            document.getElementById('error-phone').textContent = 'Por favor ingresa un teléfono válido';
            isValid = false;
        }

        // Validar servicio
        if (!service) {
            document.getElementById('error-service').textContent = 'Selecciona un servicio';
            isValid = false;
        }

        // Validar textarea de "Otros"
        if (service === 'otros' && otros.length < 10) {
            document.getElementById('error-otros').textContent = 'Por favor describe mejor tu consulta (mínimo 10 caracteres)';
            isValid = false;
        }

        // Validar términos
        if (!terms) {
            document.getElementById('error-terms').textContent = 'Debes aceptar los términos y condiciones';
            isValid = false;
        }

        if (isValid) {
            // Construir objeto de datos
            const formData = {
                nombre: name,
                email: email,
                telefono: phone,
                vehiculo: document.getElementById('join-vehicle').value,
                servicio: service,
                consulta_especial: otros || null,
                mensaje: document.getElementById('join-message').value,
                fecha: new Date().toLocaleString('es-ES')
            };

            // AQUÍ IRÍA LA LÓGICA PARA ENVIAR A UN SERVIDOR
            // Por ahora, solo mostrar en consola y mostrar mensaje de éxito
            console.log('Datos del formulario:', formData);

            // Guardar en localStorage (opcional, para demostrativo)
            localStorage.setItem('autolook_last_request', JSON.stringify(formData));

            // Mostrar mensaje de éxito
            form.style.display = 'none';
            document.getElementById('form-success').style.display = 'block';

            // Scroll al mensaje de éxito
            setTimeout(() => {
                document.getElementById('form-success').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });
}

// =====================================
// LÓGICA DE FORMULARIO DE CONTACTO
// =====================================

function setupContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validaciones básicas
        if (name.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        if (subject.length < 5) {
            alert('El asunto debe tener al menos 5 caracteres');
            return;
        }

        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            return;
        }

        // Construir objeto de datos
        const formData = {
            nombre: name,
            email: email,
            telefono: document.getElementById('phone').value,
            vehiculo: document.getElementById('vehicle').value,
            asunto: subject,
            mensaje: message,
            fecha: new Date().toLocaleString('es-ES')
        };

        console.log('Mensaje de contacto:', formData);
        localStorage.setItem('autolook_contact_message', JSON.stringify(formData));

        // Mostrar confirmación
        alert('Gracias por tu mensaje. Nos pondremos en contacto pronto!');
        form.reset();
    });
}

// =====================================
// NAVEGACIÓN ACTIVA
// =====================================


// Función actualizada en la sección HAMBURGER MENU TOGGLE

// =====================================
// SCROLL SUAVE (Ya implementado con CSS)
// =====================================

// =====================================
// INICIALIZAR CUANDO DOM CARGA
// =====================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Autolook - Inicializando aplicación...');

    // Renderizar servicios
    renderServices();

    // Configurar formularios
    setupJoinForm();
    setupContactForm();

    // Establecer navegación activa
    setActiveNavLink();

    console.log('Autolook - Aplicación lista');
});

// =====================================
// FUNCIÓN AUXILIAR: Enviar datos a API (Opcional)
// =====================================

async function sendToServer(endpoint, data) {
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

// =====================================
// USO FUTURO: Para integrar con un backend
// Descomentar y ajustar según tu API
// =====================================

/*
// En setupJoinForm(), reemplazar la línea console.log con:
const result = await sendToServer('/api/solicitudes', formData);
if (result) {
    // Mostrar éxito
} else {
    // Mostrar error
}
*/

// =====================================
// HAMBURGER MENU TOGGLE (Mobile)
// =====================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

// Toggle mobile menu when hamburger is clicked
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar') && !e.target.closest('#hamburgerBtn') && mobileMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Update active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
