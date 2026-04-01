window.initStatsCounter = function() {
    const counters = document.querySelectorAll('.counter');
    
    const animate = (el) => {
        const target = +el.getAttribute('data-target');
        const count = +el.innerText.replace(/,/g, '');
        const inc = target / 100;

        if (count < target) {
            el.innerText = Math.ceil(count + inc);
            setTimeout(() => animate(el), 25);
        } else {
            el.innerText = target.toLocaleString('id-ID');
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
};