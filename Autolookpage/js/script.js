/* =====================================
   AUTOLOOK - Premium Automotive Detailing
   JavaScript - Lógica Global
   ===================================== */

// =====================================
// ARRAY DE SERVICIOS (8 Servicios)
// =====================================

const services = [
    {
        id: 'ceramic-coating',
        name: 'Ceramic Coating',
        description: 'Protección de larga duración que repele agua, suciedad y contaminantes. Crea una barrera invisible que mantiene tu vehículo impecable por años.',
        price: '$$$',
        features: ['Protección 2-5 años', 'Repele agua y suciedad', 'Brillo Ultra', 'Fácil limpieza']
    },
    {
        id: 'pulido',
        name: 'Pulido Profesional',
        description: 'Elimina rayones superficiales, marcas de agua y oxido. Devuelve el brillo original y prepara la pintura para tratamientos premium.',
        price: '$$',
        features: ['Elimina rayones', 'Restaura brillo', 'Prepara pintura', 'Hasta 3 capas']
    },
    {
        id: 'detailing-interior',
        name: 'Detailing Interior',
        description: 'Limpieza profunda y acondicionamiento premium de todos los interiores. Revitaliza cueros, plásticos y telas con productos de alta gama.',
        price: '$$$',
        features: ['Limpieza profunda', 'Acondicionamiento cuero', 'Aromas premium', 'Protección UV']
    },
    {
        id: 'ppf',
        name: 'Protección PPF',
        description: 'Paint Protection Film (PPF) de última generación. Protege contra rasguños, piedras y daños ambientales. Transparente e invisible.',
        price: '$$$',
        features: ['Protección transparente', 'Auto-sanación', '10+ años durabilidad', 'Cobertura completa']
    },
    {
        id: 'limpieza-motor',
        name: 'Limpieza de Motor',
        description: 'Limpieza profunda del compartimento del motor. Esencial para mantener el rendimiento y prevenir problemas de corrosión.',
        price: '$$',
        features: ['Desengrasamiento', 'Protección anti-corrosión', 'Brillo restaurado', 'Longevidad del motor']
    },
    {
        id: 'restauracion-opticas',
        name: 'Restauración de Ópticas',
        description: 'Recupera la transparencia original de faros y calaveras. Elimina opacidad y rayones causados por UV y contaminación.',
        price: '$$',
        features: ['Restaura transparencia', 'Elimina opacidad', 'Cristal como nuevo', 'Mejora visibilidad']
    },
    {
        id: 'descontaminado',
        name: 'Descontaminación',
        description: 'Eliminación profesional de contaminantes metálicos y químicos. Paso esencial antes de cualquier tratamiento de protección.',
        price: '$',
        features: ['Elimina metales', 'Limpia químicos', 'Prepara pintura', 'Extenso proceso']
    },
    {
        id: 'mantenimiento-premium',
        name: 'Mantenimiento Premium',
        description: 'Programa completo de mantenimiento periódico. Mantiene tu vehículo en condiciones de concesionario durante todo el año.',
        price: '$$',
        features: ['Inspección completa', 'Limpieza profunda', 'Protecciones', 'Periodicidad flexible']
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
                     Recomendación: Imagen de 400x250px
                     Formato: JPG o WebP
                     Ruta sugerida: assets/images/${service.id}.jpg
                -->
                <p>${service.name}</p>
            </div>
            <div class="service-card-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">${service.price}</div>
                <div class="service-features">
                    ${service.features.map(feature => `<span style="display: block; font-size: 0.85rem; color: #d4af37; margin: 0.25rem 0;">✓ ${feature}</span>`).join('')}
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

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');

        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

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
