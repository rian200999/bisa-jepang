window.initPathSlider = function () {
    new Swiper('.path-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });
};

window.initPathSelection = function() {
    const cards = document.querySelectorAll('.level-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const level = card.querySelector('h3').innerText;
            // Di sini kamu bisa arahkan ke halaman detail level
            console.log(`Level dipilih: ${level}`);
        });
    });
};