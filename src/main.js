let count = 5000;
let globalItemX = 0;
let globalItemY = 0;
function getCursor(event) {
  //GET CURSOR POSITION
  let x = event.clientX;
  let y = event.clientY;

  globalCursorX = x;
  globalCursorY = y;
  const cursorImage = document.getElementById('cursor-image'); //IMAGE OVER THE CURSOR
  cursorImage.style.top = y - 50 + 'px';
  cursorImage.style.left = x - 50 + 'px';
  // console.log(globalItemX);
  // console.log(x);
  if (
    globalItemX > x - 10 &&
    globalItemX < x + 10 &&
    globalItemY > y - 10 &&
    globalItemY < y + 10
  ) {
    console.log('Collided');
  }
}

function changeTheme(address) {
  const img = document.getElementById('cursor-image');
  const body = document.body;

  console.log(address);

  if (address === 'src/assets/catcursor.png') {
    body.style.backgroundColor = 'rgb(201, 42, 230, 1)';
  }

  if (address === 'src/assets/buffdog.png') {
    body.style.backgroundColor = 'rgb(24, 162, 243, 1)';
  }

  if (address === 'src/assets/spikachu.png') {
    body.style.backgroundColor = 'rgb(183, 35, 10, 1)';
  }

  if (address === 'src/assets/puffle.png') {
    body.style.backgroundColor = 'rgb(31, 175, 44, 1)';
  }

  img.src = address;
}

function newItem() {
  const body = document.body;
  console.log('NEW NODE');
  aNewItem = new Items(body);
  if (count > 0) {
    count -= 1000;
  }
  console.log(aNewItem.node.style.top);
  // globalItemX = newItem.node.style.top.replace('px', '');
  // globalItemY = newItem.node.style.left.replace('px', '');
  // console.log(globalItemX);
}

function startGame() {
  // let playTime = 100;
  // while (playTime !== 0) {
  //   newItem = new Items(body);
  //   playTime -= 1;
  // }

  setInterval(newItem, count);
}

document.addEventListener('DOMContentLoaded', function () {
  //WHEN PAGE LOADS
  const playButton = document.getElementById('start-game-button');
  const audio = document.getElementById('background-music');

  playButton.addEventListener('click', function () {
    //MUSIC BUTTON
    audio.play();
    audio.volume = 1;
  });

  document.addEventListener('mousemove', getCursor);
});
