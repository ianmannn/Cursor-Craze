let count = 5000;
let globalItemX = 0;
let globalItemY = 0;
let globalCursorX = 0;
let globalCursorY = 0;
let globalScore = 0;
let globalItemImg = 'src/assets/fish.png';
let gameInterval;
let gameTimeout;
let gameEnded = false;

function getCursor(event) {
  // GET CURSOR POSITION
  let x = event.clientX;
  let y = event.clientY;

  globalCursorX = x;
  globalCursorY = y;
  const cursorImage = document.getElementById('cursor-image'); // IMAGE OVER THE CURSOR
  cursorImage.style.top = y - 100 + 'px';
  cursorImage.style.left = x - 60 + 'px';
}

function changeTheme(address) {
  const img = document.getElementById('cursor-image');
  const body = document.body;

  console.log(address);

  if (address === 'src/assets/catcursor.png') {
    body.style.backgroundColor = 'rgb(201, 42, 230, 1)';
    globalItemImg = 'src/assets/fish.png';
  }

  if (address === 'src/assets/buffdog.png') {
    body.style.backgroundColor = 'rgb(24, 162, 243, 1)';
    globalItemImg = 'src/assets/bone.png';
  }

  if (address === 'src/assets/spikachu.png') {
    body.style.backgroundColor = 'rgb(183, 35, 10, 1)';
    globalItemImg = 'src/assets/pokeball.png';
  }

  if (address === 'src/assets/puffle.png') {
    body.style.backgroundColor = 'rgb(31, 175, 44, 1)';
    globalItemImg = 'src/assets/puffletreat.png';
  }

  img.src = address;
}

function newItem() {
  if (gameEnded) return; // Stop spawning items if the game has ended

  const body = document.body;
  console.log('NEW NODE');
  let aNewItem = new Items(body);
  aNewItem = new Items(body);
  aNewItem = new Items(body);

  // Set a random delay for the next item spawn
  let randomDelay = Math.floor(Math.random() * 2000) + 500; // between 500ms to 2500ms
  setTimeout(newItem, randomDelay);
}

function newHazard() {
  if (gameEnded) return; // Stop spawning hazards if the game has ended

  const body = document.body;
  console.log('NEW HAZARD');
  let aNewHazard = new Hazard(body);
  aNewHazard = new Hazard(body);
  aNewHazard = new Hazard(body);

  // Set a random delay for the next hazard spawn
  let randomDelay = Math.floor(Math.random() * 2000) + 500; // between 500ms to 2500ms
  setTimeout(newHazard, randomDelay);
}

function endGame() {
  gameEnded = true;
  clearTimeout(gameTimeout);
  clearInterval(gameInterval);
  const body = document.body;
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  const gameOverText = document.createElement('h1');
  gameOverText.innerText = 'Game Over!';
  gameOverText.style.color = 'white';
  gameOverText.style.textAlign = 'center';
  body.appendChild(gameOverText);

  const gameEndScore = document.createElement('h1');
  gameEndScore.innerText = 'Score: ' + globalScore;
  gameEndScore.style.color = 'white';
  gameEndScore.style.textAlign = 'center';
  body.appendChild(gameEndScore);

  console.log('Game Over!');
}

function startGame() {
  gameEnded = false;
  globalScore = 0;
  document.getElementById(
    'increasescore'
  ).innerText = `Your Score: ${globalScore}`;
  newItem();
  newHazard();
  gameTimeout = setTimeout(endGame, 60000); // End game after 1 minute
}

document.addEventListener('DOMContentLoaded', function () {
  // WHEN PAGE LOADS
  const playButton = document.getElementById('start-game-button');
  const audio = document.getElementById('background-music');

  playButton.addEventListener('click', function () {
    // MUSIC BUTTON
    audio.play();
    audio.volume = 1;
    startGame(); // Start the game when the play button is clicked
  });

  document.addEventListener('mousemove', getCursor);
});

document.addEventListener('click', function () {
  const clickSound = document.getElementById('click-sound');
  clickSound.play();
});
