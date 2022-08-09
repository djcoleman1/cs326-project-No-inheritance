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
    this.keyboard.push("backspace");
    this.keyboard.push("enter");
  }

  render(element) {
    element.innerHTML = "";
    for (let i = 0; i < 6; ++i) {
      for (let j = 0; j < 5; ++j) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.innerText = this.grid[i][j] === null ? '' : this.grid[i][j];
        /*const label = scoring.label(i, j);
        if (label !== '') {
          div.classList.add(label);
        }*/
        element.appendChild(div);
      }
    }
  }
}