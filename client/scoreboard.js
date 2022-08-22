const name = document.getElementById("name");

class Scoreboard {
  constructor() {
    this.scores = [];
  }

  async saveScore(name, score) {
    this.scores.push({"name": name, "score": score});
    const data = JSON.stringify({name, score});
    const response = await fetch('/newPlayer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  }

  getScores() {
    return this.scores;
  }

  render(sb) {
    let html = '';
    this.scores.forEach((player) => {
      html += `
        <tr>
          <td>${player.name}</td>
          <td>${player.score}</td>
        </tr>
      `;
    });
    sb.appendChild(html);
  }
}