const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');

const wheel = {
    radius: canvas.width / 2,
    segments: 10,
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#80ff00', '#0080ff'],
    rotation: 0,
    isSpinning: false,
    spinSpeed: 0
};

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const angleStep = 2 * Math.PI / wheel.segments;
    for (let i = 0; i < wheel.segments; i++) {
        ctx.beginPath();
        ctx.moveTo(wheel.radius, wheel.radius);
        ctx.arc(wheel.radius, wheel.radius, wheel.radius, i * angleStep + wheel.rotation, (i + 1) * angleStep + wheel.rotation);
        ctx.fillStyle = wheel.colors[i % wheel.colors.length];
        ctx.fill();
    }
}

function spinWheel() {
    if (wheel.isSpinning) {
        wheel.rotation += wheel.spinSpeed;
        wheel.spinSpeed *= 0.98; // Slow down the wheel over time
        if (wheel.spinSpeed < 0.001) {
            wheel.isSpinning = false;
            wheel.spinSpeed = 0;
        }
        drawWheel();
        requestAnimationFrame(spinWheel);
    }
}

function startSpin() {
    if (!wheel.isSpinning) {
        wheel.spinSpeed = 0.2 + Math.random() * 0.3; // Random spin speed
        wheel.isSpinning = true;
        spinWheel();
    }
}

canvas.addEventListener('mousedown', startSpin);
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent scrolling when touching the canvas
    startSpin();
});

drawWheel();
