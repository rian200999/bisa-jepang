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
    await loadSection('app-content', 'interactive.html');
    await loadSection('app-content', 'companion.html');
    await loadSection('app-content', 'event.html');
    await loadSection('app-content', 'articles.html');
    await loadSection('app-content', 'community.html');
    await loadSection('app-content', 'partners.html');
    await loadSection('app-content', 'contact.html');

    // BARU panggil fungsi rotasinya
    if (typeof window.initHeroRotation === 'function') {
        window.initHeroRotation();
    }
    if (typeof window.initStatsCounter === 'function') window.initStatsCounter();
    if (typeof window.initPathSlider === 'function') window.initPathSlider();
    if (typeof window.initPathSelection === 'function') window.initPathSelection();
    if (window.initFeaturesInteractions) window.initFeaturesInteractions();
    if (window.initInteractiveHub) window.initInteractiveHub();
    if (window.initCompanion) window.initCompanion();
    if (window.initEvent) window.initEvent();
    if (window.initArticles) window.initArticles();
    if (window.initCommunity) window.initCommunity();
    if (window.initPartners) window.initPartners();
    if (window.initContact) window.initContact();


    // Load section lain
    await loadSection('app-footer', 'footer.html');

    AOS.init();
});