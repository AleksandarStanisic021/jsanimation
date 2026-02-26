import "./style.css";

let canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 600);
const CANVAS_WIDTH = (canvas.width = 600);

const spriteWidth = 575;
const spriteHeight = 523;

const playerImage = new Image();
playerImage.src = "./shadow_dog.png";
let x = 0;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  /* ctx.drawImage(
   
  );*/

  requestAnimationFrame(animate);
}

animate();
