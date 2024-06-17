const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const pointsDisplay = document.getElementById('points');

const wheel = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 80, // Smaller circle
    points: 0
};

// Check if a point is within the circle
function isInsideCircle(x, y) {
    const dx = x - wheel.x;
    const dy = y - wheel.y;
    return (dx * dx + dy * dy) <= (wheel.radius * wheel.radius);
}

// Event listener for touch events
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;

    if (isInsideCircle(touchX, touchY)) {
        wheel.points++;
        pointsDisplay.innerText = `Points: ${wheel.points}`;
        drawWheel();
    }
});

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the wheel
    ctx.beginPath();
    ctx.arc(wheel.x, wheel.y, wheel.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

// Initial draw
drawWheel();
