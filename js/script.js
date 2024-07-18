document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');
    let animating = false;

    // Retrieve saved coin count from local storage, or start at 0
    let coinCount = getCoinCount(); // Fetch coin count from storage.js
    coinCounter.textContent = coinCount;

    mainCoin.addEventListener('click', function() {
        if (!animating) {
            // Animate the main coin
            animating = true;
            mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(function() {
                mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
                animating = false;
            }, 50); // Faster animation duration
        }

        // Update the coin counter
        coinCount++;
        coinCounter.textContent = coinCount;

        // Save the new coin count to local storage
        saveCoinCount(coinCount); // Save coin count using storage.js
    });
});
