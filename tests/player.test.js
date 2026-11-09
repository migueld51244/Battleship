import { Player } from "../src/modules/player.js";

describe("Player has a name", () => {
  test("Player name matches the provided one", () => {
    const player = new Player("John");
    expect(player.name).toBe("John");
  });

  test("Can't create player without a name", () => {
    expect(() => new Player()).toThrow();
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
  });
});
