export class Ship {
  constructor(length) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error("Invalid length");
    }
    this.length = length;
    this.hits = 0;
  }

  hit() {
    if (this.hits >= this.length) {
      return;
    }
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}
