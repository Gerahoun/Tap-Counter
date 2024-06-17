const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const pointsDisplay = document.getElementById('points');

const wheel = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 80, // Smaller circle
    rotation: 0,
    points: 0,
    totalRotation: 0
};

let lastTouchAngle = 0;

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    lastTouchAngle = getTouchAngle(e);
    wheel.totalRotation = 0;
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let currentTouchAngle = getTouchAngle(e);
    let rotation = currentTouchAngle - lastTouchAngle;

    // Ensure the rotation is positive and within 0 to 2 * Math.PI
    if (rotation < -Math.PI) rotation += 2 * Math.PI;
    if (rotation > Math.PI) rotation -= 2 * Math.PI;

    wheel.totalRotation += rotation;
    wheel.rotation += rotation;

    // Check if a full circle (2 * Math.PI) is completed
    if (wheel.totalRotation >= 2 * Math.PI) {
        wheel.points++;
        wheel.totalRotation -= 2 * Math.PI; // Subtract 2 * Math.PI to continue counting beyond one circle
    }

    pointsDisplay.innerText = `Points: ${wheel.points}`;
    lastTouchAngle = currentTouchAngle;

    drawWheel();
});

function getTouchAngle(e) {
    let rect = canvas.getBoundingClientRect();
    let touchX = e.touches[0].clientX - rect.left;
    let touchY = e.touches[0].clientY - rect.top;
    let angle = Math.atan2(touchY - wheel.y, touchX - wheel.x);
    return angle;
}

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the wheel
    ctx.save();
    ctx.translate(wheel.x, wheel.y);
    ctx.rotate(wheel.rotation);
    ctx.beginPath();
    ctx.arc(0, 0, wheel.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw a line to indicate rotation
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(wheel.radius, 0);
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

// Initial draw
drawWheel();
