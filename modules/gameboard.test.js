const GameBoard = require("./gameboard");

it("Test Gameboard", () => {
  const board = new GameBoard();
  board.placeShip(1, 1);
  expect(board.filled).toStrictEqual([[1, 1]]);
});

it("Test multiple place", () => {
  const board = new GameBoard();
  board.placeShip(1, 1);
  board.placeShip(1, 2);
  board.placeShip(1, 3);
  expect(board.filled).toStrictEqual([
    [1, 1],
    [1, 2],
    [1, 3],
  ]);
});
