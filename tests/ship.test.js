import { Ship } from "../src/modules/ship.js";

describe("Test ship integrity", () => {
  test("Ship matches the length provided", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
  });

  test("Ship starts without hits", () => {
    const ship = new Ship(3);
    expect(ship.hits).toBe(0);
  });
});

describe("Handle omissions", () => {
  test("Handle undefined length", () => {
    const emptyShip = new Ship();
    expect(emptyShip.length).toBe(undefined);
  });

  test("Check if it's sunk without length", () => {
    const emptyShip = new Ship();
    expect(emptyShip.isSunk()).toBe(false);
  });
});

describe("Test ship hit method", () => {
  test("Check hit property incrementation", () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("Can't hit when it's sunk", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(5);
  });
});

describe("Test isSunk method", () => {
  test("Ship is not sunk when created", () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship is destroyed when the number of hits equal the length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Ship isn't destroyed when the hits are less than it's length", () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("Method returns when the ship is sunk", () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.hit()).toBe(undefined);
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(true);
  });
});
