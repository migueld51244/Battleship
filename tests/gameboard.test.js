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
  });

  test("Place ship vertically starting at [3, 6], length 4", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4);
    gameboard.placeShip(ship, [3, 6], "vertical");
    expect(gameboard.board).toEqual(emptyBoard);
  });

  test("Place ship horizontally starting at [7, 3], length 2", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(2);
    gameboard.placeShip(ship, [7, 3], "horizontal");
    expect(gameboard.board).toEqual(emptyBoard);
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
  });
});

describe("Ships can't overflow the board", () => {
  test("One ship can't go beyond the board's limit", () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const placedShip = gameboard.placeShip(ship, [9, 9], "vertical");
    expect(placedShip).toBe(false);
    expect(gameboard.board).toEqual(emptyBoard);
  });

  test("Two ships can't go beyond the board's limit", () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(4);
    const placedShip1 = gameboard.placeShip(ship1, [9, 9], "vertical");
    const placedShip2 = gameboard.placeShip(ship2, [9, 9], "horizontal");
    expect(placedShip1).toBe(false);
    expect(placedShip2).toBe(false);
    expect(gameboard.board).toEqual();
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
  });
});

describe("Handle attacks", () => {
  test("Board receives one attack to one ship correctly", () => {
    const ship = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.board).toEqual([
      ["hit", ship, null, null, null, null, null, null, null, null],
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
    expect(gameboard.board).toEqual([
      ["hit", "hit", ship, null, null, null, null, null, null, null],
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

    expect(gameboard.board).toEqual([
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
    expect(gameboard.board).toEqual([
      ["hit", ship1, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, ship2],
      [null, null, null, null, null, null, null, null, null, ship2],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
    expect(ship1.hits).toBe(1);
    expect(ship1.isSunk()).toBe(false);
    expect(ship2.isSunk()).toBe(true);
  });
});
