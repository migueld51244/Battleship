import { Gameboard } from "../src/modules/gameboard.js";
import { Ship } from "../src/modules/ship.js";

const emptyBoard = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

describe("Check empty gameboard properties", () => {
  const gameboard = new Gameboard();

  test("Gameboard is empty upon creation", () => {
    expect(gameboard.board).toEqual(emptyBoard);
  });
});

describe("Correctly places ships", () => {
  test("Place ship horizontally starting at [0, 0], length 2", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(ship, [0, 0], "horizontal");
    expect(gameboard.board).toEqual([
      [ship, ship, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship]);
  });

  test("Place ship vertically starting at [0, 0], length 2", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(ship, [0, 0], "vertical");
    expect(gameboard.board).toEqual([
      [ship, null, null, null, null, null, null, null, null, null],
      [ship, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship]);
  });

  test("Place ship horizontally starting at [4, 1], length 5", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(5);
    gameboard.placeShip(ship, [4, 1], "horizontal");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, ship, ship, ship, ship, ship, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship]);
  });

  test("Place ship vertically starting at [3, 6], length 4", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4);
    gameboard.placeShip(ship, [3, 6], "vertical");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, ship, null, null, null],
      [null, null, null, null, null, null, ship, null, null, null],
      [null, null, null, null, null, null, ship, null, null, null],
      [null, null, null, null, null, null, ship, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship]);
  });

  test("Place ship horizontally starting at [7, 3], length 2", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(ship, [7, 3], "horizontal");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, ship, null, null, null, null, null, null],
      [null, null, null, ship, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship]);
  });
});

describe("Position multiple ship on the same board", () => {
  test("Correctly places 2 ships in the same board", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);

    gameboard.placeShip(ship1, [0, 0], "vertical");
    gameboard.placeShip(ship2, [2, 2], "horizontal");

    expect(gameboard.board).toEqual([
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, ship2, ship2, ship2, ship2, ship2, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship1, ship2]);
  });

  test("Correctly places 3 ships in the same board", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);
    const ship3 = new Ship(2);

    gameboard.placeShip(ship1, [0, 0], "vertical");
    gameboard.placeShip(ship2, [2, 2], "horizontal");
    gameboard.placeShip(ship3, [6, 1], "vertical");

    expect(gameboard.board).toEqual([
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, ship2, ship2, ship2, ship2, ship2, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, ship3, null, null, null, null, null, null, null, null],
      [null, ship3, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship1, ship2, ship3]);
  });

  test("Correctly places 4 ships in the same board", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);
    const ship3 = new Ship(4);
    const ship4 = new Ship(2);

    gameboard.placeShip(ship1, [0, 0], "vertical");
    gameboard.placeShip(ship2, [2, 2], "horizontal");
    gameboard.placeShip(ship3, [1, 1], "horizontal");
    gameboard.placeShip(ship4, [5, 8], "vertical");

    expect(gameboard.board).toEqual([
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, ship3, ship3, ship3, ship3, null, null, null, null, null],
      [ship1, null, ship2, ship2, ship2, ship2, ship2, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, ship4, null],
      [null, null, null, null, null, null, null, null, ship4, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.ships).toEqual([ship1, ship2, ship3, ship4]);
  });

  test("Correctly places 5 ships in the same board", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);
    const ship3 = new Ship(2);
    const ship4 = new Ship(3);
    const ship5 = new Ship(4);

    gameboard.placeShip(ship1, [0, 0], "vertical");
    gameboard.placeShip(ship2, [2, 2], "horizontal");
    gameboard.placeShip(ship3, [8, 9], "vertical");
    gameboard.placeShip(ship4, [9, 0], "horizontal");
    gameboard.placeShip(ship5, [6, 4], "horizontal");

    expect(gameboard.board).toEqual([
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, null, null, null, null, null, null, null, null],
      [ship1, null, ship2, ship2, ship2, ship2, ship2, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, ship5, ship5, ship5, ship5, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, ship3],
      [ship4, ship4, ship4, null, null, null, null, null, null, ship3],
    ]);
    expect(gameboard.ships).toEqual([ship1, ship2, ship3, ship4, ship5]);
  });
});

describe("Ships can't overflow the board", () => {
  test("One ship can't go beyond the board's limit", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const placedShip = gameboard.placeShip(ship, [9, 9], "vertical");
    expect(placedShip).toBe(false);
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });

  test("Two ships can't go beyond the board's limit", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(4);
    const placedShip1 = gameboard.placeShip(ship1, [9, 9], "vertical");
    const placedShip2 = gameboard.placeShip(ship2, [9, 9], "horizontal");
    expect(placedShip1).toBe(false);
    expect(placedShip2).toBe(false);
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });

  test("Multiple ships can't go beyond the board's limit", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);
    const ship3 = new Ship(2);
    const ship4 = new Ship(4);
    const placedShip1 = gameboard.placeShip(ship1, [7, 0], "vertical");
    const placedShip2 = gameboard.placeShip(ship2, [4, 8], "horizontal");
    const placedShip3 = gameboard.placeShip(ship3, [9, 3], "vertical");
    const placedShip4 = gameboard.placeShip(ship4, [6, 7], "horizontal");
    expect(placedShip1).toBe(false);
    expect(placedShip2).toBe(false);
    expect(placedShip3).toBe(false);
    expect(placedShip4).toBe(false);
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });
});

describe("Handle attacks", () => {
  test("Board receives one attack to one ship correctly", () => {
    const ship = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.attacks).toEqual([
      ["hit", null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(ship.hits).toBe(1);
  });

  test("Board receives two attacks to one ship correctly", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    expect(gameboard.attacks).toEqual([
      ["hit", "hit", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(ship.hits).toBe(2);
  });

  test("Board receives multiple attacks to three ship and sinks all of them", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(5);
    const ship3 = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [2, 0], "horizontal");
    gameboard.placeShip(ship3, [4, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);

    gameboard.receiveAttack([2, 0]);
    gameboard.receiveAttack([2, 1]);
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([2, 3]);
    gameboard.receiveAttack([2, 4]);

    gameboard.receiveAttack([4, 0]);
    gameboard.receiveAttack([4, 1]);

    expect(gameboard.attacks).toEqual([
      ["hit", "hit", "hit", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      ["hit", "hit", "hit", "hit", "hit", null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      ["hit", "hit", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(ship1.isSunk()).toBe(true);
    expect(ship2.isSunk()).toBe(true);
    expect(ship3.isSunk()).toBe(true);
  });

  test("Board receives multiple attacks getting one ship sunk and the other damaged", () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [1, 9], "vertical");
    gameboard.receiveAttack([0, 0]);

    gameboard.receiveAttack([1, 9]);
    gameboard.receiveAttack([2, 9]);
    expect(gameboard.attacks).toEqual([
      ["hit", null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "hit"],
      [null, null, null, null, null, null, null, null, null, "hit"],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(ship1.hits).toBe(1);
    expect(ship2.hits).toBe(2);
    expect(ship1.isSunk()).toBe(false);
    expect(ship2.isSunk()).toBe(true);
  });

  test("Repeated attacks don't register additional hits", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "vertical");
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 0]);
    expect(ship.hits).toBe(1);
  });
});

describe("Ships cannot overlap", () => {
  test("Ships isn't placed if it overlaps another", () => {
    const ship1 = new Ship(5);
    const ship2 = new Ship(5);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [2, 3], "vertical");
    const result = gameboard.placeShip(ship2, [2, 3], "horizontal");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(result).toBe(false);
    expect(gameboard.ships).toEqual[ship1];
  });

  test("Ships can't be placed exactly above another", () => {
    const ship1 = new Ship(5);
    const ship2 = new Ship(5);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [2, 3], "vertical");
    const result = gameboard.placeShip(ship2, [2, 3], "vertical");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(result).toBe(false);
    expect(gameboard.ships).toEqual[ship1];
  });

  test("Ships can't be placed on an empty coordinate that will end up to overlap another", () => {
    const ship1 = new Ship(5);
    const ship2 = new Ship(5);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [2, 3], "vertical");
    const result = gameboard.placeShip(ship2, [2, 0], "horizontal");
    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, ship1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(result).toBe(false);
    expect(gameboard.ships).toEqual[ship1];
  });
});

describe("Invalid orientation is rejected", () => {
  test("Ship doesn't get placed without orientation", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(ship, [0, 0])).toThrow();
  });

  test("Ship doesn't get placed with an invalid orientation", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(ship, [0, 0], "diagonal")).toThrow();
  });
});

describe("Gameboard rejects invalid coordinates", () => {
  test("Negative coordinates are rejected", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(ship, [-1, -5], "vertical")).toThrow();
    expect(() => gameboard.receiveAttack([-2, 0])).toThrow();
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.attacks).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });

  test("Coordinates outside the board are rejected", () => {
    const ship = new Ship(2);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(ship, [11, 10], "vertical")).toThrow();
    expect(() => gameboard.receiveAttack([22, 80])).toThrow();
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.attacks).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });

  test("Non integer coordinates are rejected", () => {
    const ship = new Ship(2);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(ship, [1.51, 0.1], "vertical")).toThrow();
    expect(() => gameboard.receiveAttack([2.2, 80])).toThrow();
    expect(gameboard.board).toEqual(emptyBoard);
    expect(gameboard.attacks).toEqual(emptyBoard);
    expect(gameboard.ships).toEqual([]);
  });
});

describe("Gameboard tracks missed attacks", () => {
  test("Board receives two missed attacks", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([8, 9]);
    gameboard.receiveAttack([9, 9]);
    expect(gameboard.attacks).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "miss"],
      [null, null, null, null, null, null, null, null, null, "miss"],
    ]);
  });

  test("Board receives two missed attacks and one on a ship", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([8, 9]);
    gameboard.receiveAttack([9, 9]);
    gameboard.receiveAttack([0, 1]);
    expect(gameboard.attacks).toEqual([
      [null, "hit", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "miss"],
      [null, null, null, null, null, null, null, null, null, "miss"],
    ]);
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(false);
  });

  test("Board sinks two ships and missed 3 attacks", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [4, 2], "vertical");
    gameboard.receiveAttack([8, 9]);
    gameboard.receiveAttack([9, 9]);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);

    gameboard.receiveAttack([4, 2]);
    gameboard.receiveAttack([5, 2]);
    gameboard.receiveAttack([6, 2]);
    expect(gameboard.attacks).toEqual([
      ["hit", "hit", "hit", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, "hit", null, null, null, null, null, null, null],
      [null, null, "hit", null, null, null, null, null, null, null],
      [null, null, "hit", null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "miss"],
      [null, null, null, null, null, null, null, null, null, "miss"],
    ]);
    expect(ship1.isSunk()).toBe(true);
    expect(ship2.isSunk()).toBe(true);
  });
});

describe("Gameboard reports whether or not all of their ships have been sunk", () => {
  test("All ships haven't been sunk when they aren't hit", () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [4, 1], "vertical");
    gameboard.placeShip(ship2, [0, 8], "vertical");
    gameboard.receiveAttack([4, 1]);
    gameboard.receiveAttack([0, 8]);
    expect(gameboard.areAllShipsSunk()).toBe(false);
  });

  test("All ships have been sunk when they are all sank", () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship1, [4, 1], "vertical");
    gameboard.placeShip(ship2, [0, 8], "vertical");
    gameboard.receiveAttack([4, 1]);
    gameboard.receiveAttack([5, 1]);
    gameboard.receiveAttack([0, 8]);
    gameboard.receiveAttack([1, 8]);
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  test("Empty board sunk status is defined", () => {
    const gameboard = new Gameboard();
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });
});

describe("Attacking doesn't modify ship placement", () => {
  test("Attacks one ship, and the gameboard still contains all the ships in the correct position", () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.placeShip(ship1, [4, 2], "vertical");
    gameboard.placeShip(ship2, [4, 9], "vertical");

    gameboard.receiveAttack([4, 9]);
    gameboard.receiveAttack([5, 9]);

    expect(gameboard.board).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, ship1, null, null, null, null, null, null, ship2],
      [null, null, ship1, null, null, null, null, null, null, ship2],
      [null, null, null, null, null, null, null, null, null, ship2],
      [null, null, null, null, null, null, null, null, null, ship2],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(gameboard.attacks).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "hit"],
      [null, null, null, null, null, null, null, null, null, "hit"],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});
