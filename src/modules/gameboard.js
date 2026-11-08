export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.attacks = Array.from({ length: 10 }, () => new Array(10).fill(null));
    this.ships = [];
  }
}
