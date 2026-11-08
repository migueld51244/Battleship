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

    if (this.ships.includes(ship)) return false;

    const [x, y] = start;

    if (!Number.isInteger(x) || x < 0 || x > 9) {
      throw new Error("Invalid coordinates");
    }

    if (!Number.isInteger(y) || y < 0 || y > 9) {
      throw new Error("Invalid coordinates");
    }

    // Generate and validate coordinates
    for (let i = 0; i < ship.length; i++) {
      const currentX = orientation === "vertical" ? x + i : x;
      const currentY = orientation === "horizontal" ? y + i : y;

      if (currentX < 0 || currentX > 9) {
        return false;
      }

      if (currentY < 0 || currentY > 9) {
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

  receiveAttack(pair) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error("Invalid coordinates format");
    }
    const [x, y] = pair;

    if (x < 0 || x > 9 || !Number.isInteger(x)) {
      throw new Error("Invalid coordinates");
    }
    if (y < 0 || y > 9 || !Number.isInteger(x)) {
      throw new Error("Invalid coordinates");
    }

    const position = this.board[x][y];

    // Already attacked
    if (this.attacks[x][y]) {
      return false;
    }

    // Register attack
    if (!position) {
      this.attacks[x][y] = "miss";
    }

    if (position) {
      this.attacks[x][y] = "hit";
      position.hit();
    }

    return true;
  }

  areAllShipsSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}
