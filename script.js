document.addEventListener('DOMContentLoaded', function() {
    const coin = document.querySelector('.coin');

    coin.addEventListener('click', function() {
        coin.style.transform = 'translate(-50%, -50%) scale(0.95)';

        setTimeout(function() {
            coin.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100); // Duration of the scale down effect
    });
});
