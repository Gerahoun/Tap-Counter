const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');

const wheel = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 100,
    rotation: 0,
    isSpinning: false,
    spinSpeed: 0,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    points: 0
};

let touchStartAngle = 0;
let lastRotation = 0;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(wheel.x, wheel.y, wheel.radius, wheel.startAngle, wheel.endAngle);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(`Points: ${wheel.points}`, 10, 30);
    ctx.closePath();
    ctx.save();
    ctx.translate(wheel.x, wheel.y);
    ctx.rotate(wheel.rotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(wheel.radius, 0);
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function startSpin() {
    if (!wheel.isSpinning) {
        wheel.isSpinning = true;
        touchStartAngle = lastRotation;
    }
}

function endSpin() {
    if (wheel.isSpinning) {
        wheel.isSpinning = false;
        let totalRotation = wheel.rotation - touchStartAngle;
        wheel.points += Math.floor(Math.abs(totalRotation / (2 * Math.PI)));
    }
}

function handleRotation(event) {
    if (wheel.isSpinning) {
        let touchAngle = Math.atan2(event.touches[0].clientY - wheel.y, event.touches[0].clientX - wheel.x);
        wheel.rotation = touchAngle - touchStartAngle;
        lastRotation = wheel.rotation;
    }
}

canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    startSpin();
});

canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    handleRotation(event);
});

canvas.addEventListener('touchend', (event) => {
    event.preventDefault();
    endSpin();
});

function animate() {
    drawWheel();
    requestAnimationFrame(animate);
}

animate();
