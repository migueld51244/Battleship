export class Ship {
  constructor(length) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error("Invalid length");
    }
    this.length = length;
    this.hits = 0;
  }

  hit() {
    if (!this.length) return null;
    if (this.hits === this.length) {
      return;
    }
    this.hits++;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
}
