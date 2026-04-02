window.initPartners = function() {
    const logos = document.querySelectorAll('.partner-logo');
    
    logos.forEach(logo => {
        logo.addEventListener('click', function() {
            // Kasih efek "pop" dan nyala pas diklik
            this.style.transform = "scale(1.2)";
            this.style.color = "#ffffff";
            this.style.textShadow = "0 0 15px rgba(255,255,255,0.5)";
            
            // Balikin ke bentuk semula setelah 300ms
            setTimeout(() => {
                this.style.transform = "";
                this.style.color = "";
                this.style.textShadow = "";
            }, 300);
        });
    });
};