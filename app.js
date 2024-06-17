const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let lastTouchAngle = 0;
let totalPoints = 0;

canvas.addEventListener('touchstart', (e) => {
    lastTouchAngle = getTouchAngle(e);
});

canvas.addEventListener('touchmove', (e) => {
    let currentTouchAngle = getTouchAngle(e);
    let rotation = currentTouchAngle - lastTouchAngle;
    if (rotation < 0) rotation += 2 * Math.PI; // Ensure positive rotation
    if (rotation >= 2 * Math.PI) {
        totalPoints++;
        document.getElementById('points').innerText = `Points: ${totalPoints}`;
    }
    lastTouchAngle = currentTouchAngle;
});

function getTouchAngle(e) {
    let rect = canvas.getBoundingClientRect();
    let touchX = e.touches[0].clientX - rect.left;
    let touchY = e.touches[0].clientY - rect.top;
    let angle = Math.atan2(touchY - canvas.height / 2, touchX - canvas.width / 2);
    return angle < 0 ? angle + 2 * Math.PI : angle;
}
