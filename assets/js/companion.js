window.initCompanion = function() {
    const streakElement = document.getElementById('streak-num');
    if(streakElement) {
        let count = 0;
        const target = 12;
        const interval = setInterval(() => {
            if(count < target) {
                count++;
                streakElement.innerText = count;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
};