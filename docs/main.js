import { Game } from "./wordle.js";

const game = new Game();
game.render(document.getElementById("board"));
/*
document.getElementById("enter").addEventListener("click", () => {
  const word = document.getElementById("word").value;
  game.playWord(word);
  game.render(document.getElementById("board"));
});

document.getElementById("backspace").addEventListener("click", () => {
  game.render(document.getElementById("board"));
});
*/