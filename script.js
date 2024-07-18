document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');
    const progressBar = document.getElementById('progress-bar');
    let animating = false;

    // Retrieve saved coin count from local storage, or start at 0
    let coinCount = getCoinCount();
    coinCounter.textContent = coinCount;

    // Initial values
    let currentLevel = 1;
    let tapsForNextLevel = 100; // Example taps needed for level 1

    mainCoin.addEventListener('click', function() {
        if (!animating) {
            animating = true;
            mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(function() {
                mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
                animating = false;
            }, 50);
        }

        // Update the coin counter
        coinCount++;
        coinCounter.textContent = coinCount;

        // Save the new coin count to local storage
        saveCoinCount(coinCount);

        // Update progress bar
        const progress = (coinCount % tapsForNextLevel) / tapsForNextLevel * 100;
        progressBar.style.width = `${progress}%`;

        // Check if level up
        if (coinCount % tapsForNextLevel === 0) {
            currentLevel++;
            tapsForNextLevel = Math.floor(tapsForNextLevel * 1.5); // Example increase for next level
        }
    });
});
