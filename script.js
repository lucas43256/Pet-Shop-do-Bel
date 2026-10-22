document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Form Handling
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(appointmentForm);
            const name = formData.get('name');
            const petName = formData.get('petname');
            const date = formData.get('date');
            const service = formData.get('service')

            // Simulation of request
            alert(`Olá ${name}! Recebemos sua solicitação para o(a) ${petName} no dia ${date} com o serviço ${service}.\n\nPara confirmar o horário agora mesmo, você será redirecionado para o nosso WhatsApp.`);

            // Redirect to WhatsApp with a pre-filled message
            const message = `Olá! Meu nome é ${name} e gostaria de agendar um serviço para o meu pet ${petName} no dia ${date} com o serviço ${service}.`;
            window.open(`https://wa.me/5531984631795?text=${encodeURIComponent(message)}`, '_blank');

            appointmentForm.reset();
        });
    }

    // Simple Scroll Animation for cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .info-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
