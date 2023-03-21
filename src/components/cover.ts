const COLOR = "#ffffff";
const PERCENTAGE = 0.1;
const HALF = 2;
const SIZE = document.body.clientWidth / HALF;

console.log(SIZE);

const HEIGHT = SIZE;
const WIDTH = SIZE;

const MIDDLE = SIZE / HALF;
const GAP = SIZE * PERCENTAGE;

const canvas = document.getElementById("logo") as HTMLCanvasElement;
if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.canvas.height = HEIGHT;
  ctx.canvas.width = WIDTH;

  ctx.beginPath();
  ctx.moveTo(MIDDLE, GAP * HALF);
  ctx.lineTo(WIDTH - GAP, HEIGHT - GAP);
  ctx.lineTo(GAP, HEIGHT - GAP);
  ctx.fillStyle = COLOR;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(MIDDLE, GAP);
  ctx.lineTo(WIDTH - GAP, HEIGHT - GAP * HALF);
  ctx.lineTo(GAP, HEIGHT - GAP * HALF);
  ctx.closePath();
  ctx.strokeStyle = COLOR;
  ctx.stroke();
}
