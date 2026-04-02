window.initCommunity = function () {
    const counterElement = document.querySelector('.member-count b');
    if (counterElement) {
        let count = 15420; // Start count

        // Fungsi simulasi orang join tiap beberapa detik
        setInterval(() => {
            const randomAdd = Math.floor(Math.random() * 3) + 1;
            count += randomAdd;
            // Format ke ribuan (contoh: 15.423)
            counterElement.innerText = count.toLocaleString('id-ID') + '+';
        }, 5000);
    }

    // Kasih delay random buat bubble chat biar gak barengan geraknya
    const bubbles = document.querySelectorAll('.floating-bubble');
    bubbles.forEach((b, index) => {
        b.style.animationDelay = `${index * 1.5}s`;
    });
};