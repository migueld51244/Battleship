import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(name) {
    if (typeof name !== "string" || name.length <= 0) {
      throw new Error("Invalid name");
    }
    this.name = name;
    this.board = new Gameboard();
  }
}
