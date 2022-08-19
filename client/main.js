import { Game } from "/server/wordle.js";

const game = new Game();
let board = document.getElementById("board");
let keyboard = document.getElementById("keyboard");
game.render(board, keyboard);

document.getElementById("enter").addEventListener("click", () => {
  const word = document.getElementById("word").value;
  game.playWord(word);
  game.render(board, keyboard);
});

document.getElementById("backspace").addEventListener("click", () => {
  game.goBack();
  game.render(board, keyboard);
});
