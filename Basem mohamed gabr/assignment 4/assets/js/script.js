// Form handling
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully!');
            this.reset();
        });