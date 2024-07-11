document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinsContainer = document.getElementById('coins-container');
    const coinCounter = document.getElementById('coin-counter');
    let coinCount = 0;

    mainCoin.addEventListener('click', function() {
        // Animate the main coin
        mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(function() {
            mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100); // Duration of the scale down effect

        // Create a new coin element
        const newCoin = document.createElement('img');
        newCoin.src = 'Fake Coin Button.svg'; // Path to the coin image
        newCoin.alt = 'New Coin';
        newCoin.classList.add('new-coin');

        // Append the new coin to the container
        coinsContainer.appendChild(newCoin);

        // Update the coin counter
        coinCount++;
        coinCounter.textContent = `Coins: ${coinCount}`;
    });
});
