window.initContact = function () {
    const btnCollab = document.querySelector('.btn-submit-collab');

    if (btnCollab) {
        btnCollab.addEventListener('click', function () {
            const originalText = this.innerHTML;

            // Simulasi Loading
            this.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Mengirim...";
            this.style.pointerEvents = "none";
            this.style.opacity = "0.7";

            setTimeout(() => {
                // Simulasi Success
                this.innerHTML = "<i class='bx bx-check'></i> Berhasil Terkirim!";
                this.style.background = "#27ae60";

                setTimeout(() => {
                    // Balik ke awal
                    this.innerHTML = originalText;
                    this.style.pointerEvents = "auto";
                    this.style.opacity = "1";
                    this.style.background = "#BC002D";
                }, 3000);
            }, 2000);
        });
    }
};