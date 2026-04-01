const loadSection = async (id, file) => {
    const response = await fetch(`./sections/${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML += html;
};

document.addEventListener('DOMContentLoaded', async () => {
    // Tunggu sampai HTML Hero masuk ke DOM
    await loadSection('app-content', 'hero.html');
    await loadSection('app-content', 'stats.html');
    await loadSection('app-content', 'path.html');
    await loadSection('app-content', 'features.html');

    // BARU panggil fungsi rotasinya
    if (typeof window.initHeroRotation === 'function') {
        window.initHeroRotation();
    }
    if (typeof window.initStatsCounter === 'function') window.initStatsCounter();
    if (typeof window.initPathSlider === 'function') window.initPathSlider();
    if (typeof window.initPathSelection === 'function') window.initPathSelection();
    if (window.initFeaturesInteractions) window.initFeaturesInteractions();

    // Load section lain
    await loadSection('app-footer', 'footer.html');

    AOS.init();
});