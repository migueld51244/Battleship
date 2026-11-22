import { Player } from "../src/modules/player.js";
import { Ship } from "../src/modules/ship.js";
import { GameController } from "../src/modules/gamecontroller.js";

describe("Stores players", () => {
  test("Stores 2 players", () => {
    const p1 = new Player("Ryan");
    const p2 = new Player("Tim");
    const controller = new GameController(p1, p2);
    expect(controller.players).toEqual([p1, p2]);
  });
});

describe("Selects the starting player", () => {
  test("Selects the starting player randomly", () => {
    const p1 = new Player("Ryan");
    const p2 = new Player("Tim");
    const controller = new GameController(p1, p2);
    expect(controller.players).toContainEqual(controller.currentPlayer);
  });
});

describe("Attacks", () => {
  test("Opponent board gets attacked", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    controller.playTurn([5, 3]);
    controller.playTurn([0, 0]);
    expect(controller.currentPlayer.gameboard.attacks[(0, 0)]).toBe("miss");
  });
});

describe("Turn execution", () => {
  test("Starting player is replaced after valid move", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    const firstPlayer = controller.currentPlayer;
    controller.playTurn([5, 3]);
    expect(controller.currentPlayer).not.toEqual(firstPlayer);
  });

  test("Current player isn't replaced after invalid move", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const controller = new GameController(p1, p2);
    const firstPlayer = controller.currentPlayer;
    controller.playTurn([5, -3]);
    expect(controller.currentPlayer).toEqual(firstPlayer);
  });
});

describe("Win detection", () => {
  test("Correctly stores winner", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const ship = new Ship(1);
    const controller = new GameController(p1, p2);
    controller.currentPlayer.gameboard.placeShip(ship, [0, 0], "horizontal");
    const currPlayer = controller.currentPlayer;
    controller.playTurn([6, 3]);
    controller.playTurn([0, 0]);
    expect(controller.winner).toEqual(currPlayer);
    expect(controller.gameOver).toBe(true);
  });

  test("Rejects turns after game ends", () => {
    const p1 = new Player("Jonas");
    const p2 = new Player("Paul");
    const ship = new Ship(1);
    const controller = new GameController(p1, p2);
    controller.insertShip(p1, ship, [2, 3]);
    controller.playTurn([2, 3]);
    controller.playTurn([2, 3]);
    expect(controller.playTurn([3, 1])).toBe(false);
    expect(controller.winner).toEqual(controller.currentPlayer);
    expect(controller.gameOver).toBe(true);
  });
});
