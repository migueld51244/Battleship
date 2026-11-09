import { Player } from "../src/modules/player.js";

describe("Player has a name", () => {
  test("Player name matches the provided one", () => {
    const player = new Player("John");
    expect(player.name).toBe("John");
  });

  test("Can't create player without a name", () => {
    expect(() => new Player()).toThrow();
  });

  test("Reject empty string as name", () => {
    expect(() => new Player("")).toThrow();
  });

  test("Reject invalid name types", () => {
    expect(() => new Player(11)).toThrow();
    expect(() => new Player(["Mike"])).toThrow();
    expect(() => new Player({ name: "Paul" })).toThrow();
  });
});

describe("Player has a board", () => {
  test("Player starts with an empty gameboard", () => {
    const player = new Player("Smith");
    const empty = Array.from({ length: 10 }, () => new Array(10).fill(null));
    expect(player.gameboard.board).toEqual(empty);
  });
});

describe("Player can attack", () => {
  test("Player can attack the opponent's board", () => {
    const player1 = new Player("Mike");
    const player2 = new Player("Harry");

    player1.attack(player2.gameboard, [0, 0]);
    expect(player2.gameboard.attacks).toEqual([
      ["miss", null, null, null, null, null, null, null, null, null],
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

  test("Attack doesn't modify the player's own board", () => {
    const player1 = new Player("Lucy");
    const player2 = new Player("Lewis");
    const empty = Array.from({ length: 10 }, () => new Array(10).fill(null));
    player1.attack(player2.gameboard, [4, 2]);
    expect(player1.gameboard.board).toEqual(empty);
  });

  test("Attack returns true for a successful attack", () => {
    const player1 = new Player("Sally");
    const player2 = new Player("Joey");
    player1.gameboard.placeShip(new Ship(3), [4, 2], "horizontal");
    player2.gameboard.placeShip(new Ship(3), [1, 6], "vertical");

    expect(() => player1.attack(player2.gameboard, [4, 3])).toBe(true);
    expect(() => player2.attack(player1.gameboard, [2, 6])).toBe(true);
  });

  test("Attack returns false for a repeated attack", () => {
    const player1 = new Player("Sally");
    const player2 = new Player("Joey");
    player1.gameboard.placeShip(new Ship(3), [4, 2], "horizontal");
    player2.gameboard.placeShip(new Ship(3), [1, 6], "vertical");

    expect(() => player1.attack(player2.gameboard, [4, 3])).toBe(true);
    expect(() => player2.attack(player1.gameboard, [2, 6])).toBe(true);
    expect(() => player1.attack(player2.gameboard, [4, 3])).toBe(false);
  });
});
