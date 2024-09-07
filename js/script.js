document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');
    const message = document.getElementById('message');
    let animating = false;

    // Define the messages
    const messages = [
        "واقعا اذیتش کردی؟",  // Initial message
        "بازم اذیتش کردی؟" ,
        "بی ادب",
        "برو بهش بگو ببخشید",
        "عجب آدمی هستی",
        "میری جهنم",
        ")':",
        "جای اینکارا برو زبان بخون",
        "مهاجرتت مهم تر بود یا اذیت کردنش؟",
        "شمیاد",
        "بهت اعتماد کرده بود نامرد",
        "خدا دوست نداره",
        "خوشحالی الان؟",
        "واسه چی اینجوری کردی",
        "برو از دلش دربیار",
        "گناه داشت",
        "اونم یه روز تلافی میکنه ، حالا ببین",
        "کارت زشت بود ولی",
        "یزیدی چون که",
        "میدونستی ناراحت شد؟"
    ];

    // Retrieve saved coin count from local storage, or start at 0
    let coinCount = getCoinCount();
    coinCounter.textContent = coinCount;

    // Set initial message on load
    let wasPageReloaded = localStorage.getItem('pageReloaded') === 'true';
    if (wasPageReloaded) {
        message.textContent = messages[0];  // Reset to initial message on reload
        localStorage.removeItem('pageReloaded');  // Clear reload flag
    } else {
        message.textContent = messages[0];  // Set the first message initially
    }

    // Coin click event listener
    mainCoin.addEventListener('click', function() {
        if (!animating) {
            animating = true;
            mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(function() {
                mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
                animating = false;
            }, 50);
        }

        // Increment and update coin counter
        coinCount++;
        coinCounter.textContent = coinCount;
        saveCoinCount(coinCount);

        // Change the message randomly, excluding the first message
        const randomIndex = Math.floor(Math.random() * (messages.length - 1)) + 1;
        message.textContent = messages[randomIndex];
    });

    // Before page unload, mark that the page was reloaded
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('pageReloaded', 'true');
    });
});

// Functions to save and retrieve the coin count from local storage
function saveCoinCount(count) {
    localStorage.setItem('coinCount', count);
}

function getCoinCount() {
    return localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
}
