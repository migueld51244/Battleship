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
