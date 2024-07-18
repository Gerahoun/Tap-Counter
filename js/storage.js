function getCoinCount() {
    return parseInt(localStorage.getItem('coinCount')) || 0;
}

function saveCoinCount(count) {
    localStorage.setItem('coinCount', count);
}
