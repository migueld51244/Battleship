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

    const [x, y] = start;

    for (let i = 0; i < ship.length; i++) {
      if (orientation === "vertical") {
        const coordinate = this.board[x][y + i];
        if (coordinate !== null) return false;
        this.board[x][y + i] = ship;
      } else {
        const coordinate = this.board[x][y + i];
        if (coordinate !== null) return false;
        this.board[x + i][y] = ship;
      }
    }

    this.ships.push(ship);
    return true;
  }
}
