/**
 * Logic untuk Features Section: Tilt Effect & Audio Preview
 */
window.initFeaturesInteractions = function() {
    const cards = document.querySelectorAll('.tilt-element');
    const audioBtn = document.getElementById('audio-demo');
    const audioStatus = document.getElementById('audio-status');

    // 1. MOUSE MOVE TILT EFFECT
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });

    // 2. AUDIO DEMO INTERACTION
    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            audioStatus.innerText = "🔊 Memutar: こんにちは (Konnichiwa)";
            audioStatus.style.color = "#fff";
            
            // Simulasi getaran icon saat bunyi
            audioBtn.style.animation = "shake 0.5s ease";
            
            setTimeout(() => {
                audioStatus.innerText = "Selesai!";
                audioBtn.style.animation = "";
                setTimeout(() => { audioStatus.innerText = "Klik untuk coba lagi"; }, 2000);
            }, 1500);
        });
    }
};