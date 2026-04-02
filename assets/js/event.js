window.initEvents = function() {
    const btnEvents = document.querySelectorAll('.btn-ev');
    
    btnEvents.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Biar gak auto-scroll ke atas kalau href="#"
            
            // Kalau udah daftar, gak usah jalanin lagi
            if (this.classList.contains('registered')) return;

            const originalText = this.innerHTML;
            
            // State: Loading
            this.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Memproses...";
            this.style.pointerEvents = "none";
            this.style.opacity = "0.7";

            // State: Success (Simulasi delay jaringan 1.5 detik)
            setTimeout(() => {
                this.innerHTML = "<i class='bx bx-check-circle'></i> Berhasil Daftar!";
                this.style.background = "#27ae60";
                this.style.color = "#fff";
                this.style.borderTop = "none";
                this.classList.add('registered');
                
                // Tambahin efek pop up kecil
                this.style.transform = "scale(1.05)";
                setTimeout(() => {
                    this.style.transform = "scale(1)";
                }, 200);

            }, 1500);
        });
    });
};