// Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Contact form
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            e.target.reset();
        });

        // Smooth scroll for buttons
        document.querySelectorAll('button').forEach(btn => {
            if (btn.textContent.includes('View My Work')) {
                btn.addEventListener('click', () => {
                    document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'});
                });
            }
            if (btn.textContent.includes('Contact Me')) {
                btn.addEventListener('click', () => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                });
            }
        });
