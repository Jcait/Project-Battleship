class GameBoard {
  constructor() {
    this.corners = [
      [0, 0],
      [10, 10],
    ];

    this.filled = [];
  }
  placeShip(x, y) {
    this.filled.push([x, y]);
  }
}

module.exports = GameBoard;
