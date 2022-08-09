// This will provide the functionality for the WORDLE game
export class Game {
  constructor() {
    this.grid = [];
    for (let i = 0; i < 6; ++i) {
      let arr = [];
      for (let j = 0; j < 5; ++j) {
        arr.push(null);
      }
      this.grid[i] = arr;
    }
    this.keyboard = [];
    for (let i = 0; i < 26; ++i) {
      this.keyboard.push(String.fromCharCode(97 + i));
    }
  }

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
      div.addEventListener("click", () => { // this function should add the clicked letter to the board, but not enter the word

      });
    }

  }
}