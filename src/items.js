class Items {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'item');
    this.node.setAttribute('src', 'src/assets/fish.png');

    el.appendChild(this.node);

    this.currentDirection = 'down';
    this.SPEED = 350;
    this.node.style.top = '0px';
    this.node.style.left = `${Math.floor(Math.random() * 1000) + 500}px`; // Position item at the center horizontally
    this.node.style.transform = 'translateX(-50%)'; // Center the item

    this.boundMove = this.move.bind(this);

    setTimeout(this.boundMove, this.SPEED);
  }

  move() {
    let topPosition = Number(this.node.style.top.replace('px', ''));

    topPosition += 50;
    this.node.style.top = `${topPosition}px`;

    if (topPosition < window.innerHeight) {
      setTimeout(this.boundMove, this.SPEED); // Continue moving if not at the bottom
    }
  }
}
