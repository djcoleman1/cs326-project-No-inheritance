// This will provide the functionality for the WORDLE game

import * as utils from "./wordleUtils.js";

class Game {
  constructor() {
    this.reset();
  }

  // Renders the board and keyboard after every click
  render(board, keyboard) {
    board.innerHTML = "";
    keyboard.innerHTML = "";
    for (let i = 0; i < 6; ++i) {
      for (let j = 0; j < 5; ++j) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerText = this.grid[i][j] === null ? '' : this.grid[i][j];
        board.appendChild(div);
      }
    }
    for (let i = 0; i < this.keyboard.length; ++i) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      div.innerText = this.keyboard[i];
      keyboard.appendChild(div);
      const self = this;
      div.addEventListener("click", () => { // this function should add the clicked letter to the board, but not enter the word
        self.setBlock(self.curLoc, div.innerText);
        self.render(document.getElementById("board"), document.getElementById("keyboard"));
        const temp = self.curLoc;
        self.curLoc = [temp[0], temp[1] + 1];
        self.prevLoc = temp;
        self.attemptWords[self.attemptCount].push(div.innerText);
      });
    }

  }

  getCurLoc() {
    return this.curLoc;
  }

  incrementAttempt() {
    this.attemptCount += 1;
  }

  setCurLoc(coordinates) { // Sets coordinates of current block to coordinates array: [row, column]
    this.curLoc = coordinates;
  }

  getPrevSpace() {
    return this.prevSpace;
  }

  setPrevSpace(coordinates) {
    this.prevSpace = coordinates;
  }

  setBlock(coordinates, letter) { // setBlock(location: [number, number], letter: String)
    this.grid[coordinates[0]][coordinates[1]] = letter;
  }

  getScore() {
    return 6 - this.attemptCount;
  }

  goBack() {
    let idx = this.prevLoc;
    this.grid[idx[0]][idx[1]] = null;
    this.curLoc = this.prevLoc;
    let temp = this.prevLoc;
    this.prevLoc = [temp[0], temp[1] - 1];
    this.attemptWords[this.attemptCount].pop();
  }

  checkWord(word) {
    return word === this.answer;
  }

  getAttemptData() {
    return {"attemptCount": this.attemptCount, "attempts": this.attemptWords};
  }

  reset() {
    this.answer = utils.getRandomWord();
    this.attemptCount = 0;
    this.attemptWords = [[], [], [], [], [], []];
    this.grid = [];
    for (let i = 0; i < 6; ++i) {
      let arr = [];
      for (let j = 0; j < 5; ++j) {
        arr.push(null);
      }
      this.grid[i] = arr;
    }
    this.curLoc = [0, 0];
    this.prevLoc = null;
    this.curBlock = this.grid[0][0];
    this.prevBlock = null;
    this.keyboard = [];
    for (let i = 0; i < 26; ++i) {
      this.keyboard.push(String.fromCharCode(97 + i));
    }
  }
}

const game = new Game();
export { game };