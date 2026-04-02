window.initTestimonials = function() {
    const cards = document.querySelectorAll('.testi-card');
    
    cards.forEach(card => {
        // 1. Efek Mouse Move (3D Tilt)
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // posisi x di dalam card
            const y = e.clientY - rect.top;  // posisi y di dalam card
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        // 2. Reset saat mouse keluar
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });

        // 3. Efek "Pop" saat diklik (Mirip logikamu di Partners)
        card.addEventListener('click', function() {
            this.style.borderColor = "#00d2ff";
            this.style.boxShadow = "0 0 30px rgba(0, 210, 255, 0.4)";
            
            setTimeout(() => {
                this.style.borderColor = "";
                this.style.boxShadow = "";
            }, 400);
        });
    });
};