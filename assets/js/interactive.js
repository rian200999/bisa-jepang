window.initInteractiveHub = function() {
    const mainCard = document.getElementById('main-flashcard');
    
    if(mainCard) {
        mainCard.addEventListener('click', () => {
            mainCard.classList.toggle('flipped');
        });
    }

    // Auto flip setiap 5 detik biar user tau itu bisa diklik
    setInterval(() => {
        if(mainCard) mainCard.classList.toggle('flipped');
    }, 5000);
};