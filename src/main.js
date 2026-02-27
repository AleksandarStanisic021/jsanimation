import "./style.css";

let canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 600);
const CANVAS_WIDTH = (canvas.width = 600);

const spriteWidth = 575;
const spriteHeight = 523;

const playerImage = new Image();
playerImage.src = "./shadow_dog.png";

let frameX = 0;
let frameY = 0;

let gameFrame = 0;
let staggerFrames = 5;

const spriteAnimations = [];

const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
  console.log(spriteAnimations);
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations["idle"].loc.length;
  frameX = position * spriteWidth;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
