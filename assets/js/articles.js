window.initArticles = function () {
    const featuredCard = document.querySelector('.article-featured');
    if (featuredCard) {
        featuredCard.addEventListener('mousemove', (e) => {
            const img = featuredCard.querySelector('img');
            const { offsetWidth: width, offsetHeight: height } = featuredCard;
            const { offsetX: x, offsetY: y } = e;

            const moveX = (x / width - 0.5) * 20;
            const moveY = (y / height - 0.5) * 20;

            img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });

        featuredCard.addEventListener('mouseleave', () => {
            featuredCard.querySelector('img').style.transform = `scale(1) translate(0, 0)`;
        });
    }
};