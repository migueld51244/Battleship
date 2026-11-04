import { Ship } from "../src/modules/ship.js";

describe("Test ship integrity", () => {
  const ship = new Ship(3);

  test("Ship matches the length provided", () => {
    expect(ship.length).toBe(3);
  });

  test("Ship starts without hits", () => {
    expect(ship.hits).toBe(0);
  });
});

describe("Handle omissions", () => {
  const emptyShip = new Ship();

  test("Handle undefined length", () => {
    expect(emptyShip.length).toBe(undefined);
  });

  test("Check if it's sunk without length", () => {
    expect(emptyShip.isSunk()).toBe(false);
  });
});

describe("Test ship hit method", () => {
  const ship = new Ship(5);

  test("Check hit property incrementation", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("Can't hit when it's sunk", () => {
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
  const ship = new Ship(3);

  test("Ship is not sunk when created", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("Ship is destroyed when the number of hits equal the length", () => {
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
    expect(ship.hit()).toBe(undefined)
    expect(ship.hits).toBe(1)
  });
});
