import { Gameboard } from "./gameboard.js";

export class PLayer {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
}
