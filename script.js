document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');

    // Retrieve saved coin count from local storage, or start at 0
    let coinCount = localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
    coinCounter.textContent = coinCount;

    mainCoin.addEventListener('click', function() {
        // Animate the main coin
        mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(function() {
            mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100); // Duration of the scale down effect

        // Update the coin counter
        coinCount++;
        coinCounter.textContent = coinCount;

        // Save the new coin count to local storage
        localStorage.setItem('coinCount', coinCount);
    });
});
