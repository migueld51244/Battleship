export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.attacks = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.ships = [];
  }

  placeShip(ship, start, orientation) {
    if (typeof ship !== "object") {
      throw new Error("Invalid ship");
    }
    if (start.length !== 2 || !Array.isArray(start)) {
      throw new Error("Invalid start position");
    }
    if (orientation !== "vertical" && orientation !== "horizontal") {
      throw new Error("Invalid orientation");
    }
  }
}
