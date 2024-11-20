const canvas = document.getElementById('myCanvas');
const lineThinknessInput = document.getElementById('thickness');
const colorInput = document.getElementById('color');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
})

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return; 
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = lineThinknessInput.value;
    ctx.strokeStyle = colorInput.value;
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
})

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}