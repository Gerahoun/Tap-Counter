document.addEventListener('DOMContentLoaded', function() {
    const mainCoin = document.getElementById('main-coin');
    const coinCounter = document.getElementById('coin-counter');
    const message = document.getElementById('message');
    let animating = false;

    const messages = [
        "Go ON!",
        "TAP TAP TAP!" ,
        "You are wasting your time btw.",
        "STOP!",
        "This is fake.",
        "؟"
    ];

    let coinCount = getCoinCount();
    coinCounter.textContent = coinCount;


    let wasPageReloaded = localStorage.getItem('pageReloaded') === 'true';
    if (wasPageReloaded) {
        message.textContent = messages[0]; 
        localStorage.removeItem('pageReloaded'); 
    } else {
        message.textContent = messages[0];
    }

    
    mainCoin.addEventListener('click', function() {
        if (!animating) {
            animating = true;
            mainCoin.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(function() {
                mainCoin.style.transform = 'translate(-50%, -50%) scale(1)';
                animating = false;
            }, 50);
        }

      
        coinCount++;
        coinCounter.textContent = coinCount;
        saveCoinCount(coinCount);

     
        const randomIndex = Math.floor(Math.random() * (messages.length - 1)) + 1;
        message.textContent = messages[randomIndex];
    });


    window.addEventListener('beforeunload', () => {
        localStorage.setItem('pageReloaded', 'true');
    });
});


function saveCoinCount(count) {
    localStorage.setItem('coinCount', count);
}

function getCoinCount() {
    return localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
}
