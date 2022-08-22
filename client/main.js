import { game } from "./game.js";
import { scoreboard } from "./scoreboard.js";

let board = document.getElementById("board");
let keyboard = document.getElementById("keyboard");
let sbHTML = document.getElementById("scoreTable")
game.render(board, keyboard);

document.getElementById("enter").addEventListener("click", () => {
  let data = game.getAttemptData();
  let word = data.attempts[data.attemptCount].join();
  if (game.checkWord(word)) {
    let sb = document.getElementById("scoreboard");
    let html = '<h1>Congratulations! You win! Check out the buttons below!</h1>';
    temp = sb.innerHTML;
    html += temp;
    sb.innerHTML = html;
  }
  game.render(board, keyboard);
  game.incrementAttempt();
});

document.getElementById("backspace").addEventListener("click", () => {
  game.goBack();
  game.render(board, keyboard);
});

document.getElementById("saveScore").addEventListener("click", () => {
  await scoreboard.saveScore(document.getElementById("name"), game.getScore());
});

document.getElementById("seeScores").addEventListener("click", () => {
  scoreboard.render(sbHTML);
});

document.getElementById("newGame").addEventListener("click", () => {
  game.reset();
  game.render(board, keyboard);
});