const COLOR = "#ffffff";
const PERCENTAGE = 0.1;
const HALF = 2;

const DIMENSIONS = {
  X: 0,
  get size() {
    return this.X;
  },
  set size(size) {
    this.X = size;
  },
};

const setRatio = () => {
  document.body.clientWidth > document.body.clientHeight
    ? (DIMENSIONS.size = document.body.clientWidth / (HALF * 4))
    : (DIMENSIONS.size = document.body.clientHeight / (HALF * 4));
};

const createCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "logo");
  document.getElementById("cover").appendChild(canvas);
  return setCanvas();
};

const getCanvas = () => document.getElementById("logo") as HTMLCanvasElement;

const setCanvas = () => {
  setRatio();

  const SIZE = DIMENSIONS.size;
  const HEIGHT = SIZE;
  const WIDTH = SIZE;

  const MIDDLE = SIZE / HALF;
  const GAP = SIZE * PERCENTAGE;

  const canvas = getCanvas();
  if (canvas?.getContext) {
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
};

createCanvas();

const sizeCanvas = () => {
  setRatio();
  getCanvas().remove();
  createCanvas();
};

addEventListener("resize", sizeCanvas);
