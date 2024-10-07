const Ship = require("./ship");

it("Test isSunk no Match", () => {
  const ship = new Ship();

  expect(ship.isSunk()).toBe(false);
});

it("Test ship length", () => {
  const ship = new Ship(3);

  expect(ship.length).toBe(3);
});

it("Test ship isSunk()", () => {
  const ship = new Ship(3);
  ship.hits = ship.length;

  expect(ship.isSunk()).toBe(true);
});
