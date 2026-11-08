export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.attacks = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.ships = [];
  }

  placeShip(ship, start, orientation) {
    if (!ship || typeof ship !== "object") {
      throw new Error("Invalid ship");
    }
    if (!Array.isArray(start) || start.length !== 2) {
      throw new Error("Invalid start position");
    }
    if (orientation !== "vertical" && orientation !== "horizontal") {
      throw new Error("Invalid orientation");
    }

    const [x, y] = start;

    // Generate and validate coordinates
    for (let i = 0; i < ship.length; i++) {
      const currentX = orientation === "vertical" ? x + i : x;
      const currentY = orientation === "horizontal" ? y + i : y;

      if (currentX < 0 || currentX > 9 || !Number.isInteger(currentX)) {
        return false;
      }

      if (currentY < 0 || currentY > 9 || !Number.isInteger(currentY)) {
        return false;
      }

      if (this.board[currentX][currentY] !== null) {
        return false;
      }
    }

    // Place ship
    for (let i = 0; i < ship.length; i++) {
      const currentX = orientation === "vertical" ? x + i : x;
      const currentY = orientation === "horizontal" ? y + i : y;
      this.board[currentX][currentY] = ship;
    }

    this.ships.push(ship);
    return true;
  }
}
