document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');
    const message = document.getElementById('message');
    let animating = false;

    // Define the messages
    const messages = [
        "بی ادب",
        "برو بهش بگو ببخشید",
        "واقعا اذیتش کردی؟"
    ];

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
    saveCoinCount(coinCount);

    // Change the message randomly (excluding the initial message)
    const randomIndex = Math.floor(Math.random() * (messages.length - 1)) + 1; // Random from index 1 onwards
    message.textContent = messages[randomIndex];
});

    // Reset message when the page is reloaded
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('pageReloaded', 'true');
    });

    // Check if the page was reloaded and reset the message
    if (localStorage.getItem('pageReloaded')) {
        localStorage.removeItem('pageReloaded');
        message.textContent = messages[0]; // Reset to the first message
    }
});
