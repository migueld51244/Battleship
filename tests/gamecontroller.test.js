import { Player } from "../src/modules/player.js";
import { Ship } from "../src/modules/ship.js";
import { GameController } from "../src/modules/gamecontroller.js";

describe("Stores players", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Stores 2 players", () => {
    const p1 = new Player("Ryan");
    const p2 = new Player("Tim");
    const controller = new GameController(p1, p2);
    expect(controller.players).toEqual([p1, p2]);
  });
});

describe("Selects the starting player", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Selects the starting player randomly", () => {
    const p1 = new Player("Ryan");
    const p2 = new Player("Tim");
    const controller = new GameController(p1, p2);
    expect(controller.players).toContainEqual(controller.currentPlayer);
  });
});

describe("Attacks", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Opponent board gets attacked", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    const opponent = controller.players.find(
      (player) => player !== controller.currentPlayer,
    );
    expect(controller.playTurn([5, 3])).toBe(true);
    expect(controller.playTurn([0, 0])).toBe(true);
    expect(opponent.gameboard.attacks[0][0]).toBe("miss");
  });
});

describe("Turn execution", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Starting player is replaced after valid move", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    const firstPlayer = controller.currentPlayer;
    expect(controller.playTurn([5, 3])).toBe(true);
    expect(controller.currentPlayer).not.toEqual(firstPlayer);
  });

  test("Current player isn't replaced after invalid move", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    const firstPlayer = controller.currentPlayer;
    expect(controller.playTurn([5, -3])).toBe(false);
    expect(controller.currentPlayer).toEqual(firstPlayer);
  });

  test("A valid hit switches turns", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    jest.spyOn(Math, "random").mockReturnValue(0);
    const ship = new Ship(2);
    const controller = new GameController(p1, p2);
    controller.players[1].gameboard.placeShip(ship, [1, 1], "vertical");
    expect(controller.playTurn([1, 1])).toBe(true);
    expect(controller.currentPlayer).toEqual(p2);
    expect(controller.players[0].gameboard.attacks[1][1]).toBe("hit");
  });

  test("Missed attack counts as valid and changes current player", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    jest.spyOn(Math, "random").mockReturnValue(0);

    const controller = new GameController(p1, p2);
    expect(controller.playTurn([1, 1])).toBe(true);
    expect(controller.currentPlayer).toEqual(p2);
  });
});

describe("Win detection", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Correctly stores winner", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const ship = new Ship(1);
    jest.spyOn(Math, "random").mockReturnValue(0);

    const controller = new GameController(p1, p2);

    controller.players[1].gameboard.placeShip(ship, [0, 0], "horizontal");
    expect(controller.playTurn([0, 0])).toBe(true);
    expect(controller.winner).toEqual(p1);
    expect(controller.currentPlayer).toEqual(p1);
    expect(controller.gameOver).toBe(true);
  });

  test("Rejects turns after game ends", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const ship = new Ship(1);
    jest.spyOn(Math, "random").mockReturnValue(0);

    const controller = new GameController(p1, p2);

    controller.players[1].gameboard.placeShip(ship, [0, 0], "horizontal");
    expect(controller.playTurn([0, 0])).toBe(true);
    expect(controller.winner).toEqual(p1);
    expect(controller.gameOver).toBe(true);
    expect(controller.playTurn([3, 1])).toBe(false);
  });
});
