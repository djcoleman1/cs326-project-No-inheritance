import { readFile, writeFile } from 'fs/promises';

// A class representing a database to keep scores
class Database {
  constructor() {
    this.path = 'scores.json';
  }

  async getTopScores() {
    const data = await this._read();
    const sorted = data.scores.sort((a, b) => b.score - a.score);
    const topScores = sorted.slice(0, 10);
    return topScores;
  }

  async saveScore(name, score) {
    const data = await this._read();
    data.scores.push({name, score});
    await this._write(data);
  }

  async updateScore(name, score) {
    const data = await this._read();
    data.scores.forEach((player) => {
      if (player.name === name) {
        player.score = score;
      }
    });
    await this._write(data);
  }

  async deletePlayer(name) {
    const data = await this._read();
    for (let i = 0; i < data.scores.length; ++i) {
      if (data.scores[i].name === name) {
        data.scores.splice(i, i + 1);
      }
    }
    await this._write(data);
  }

  async _read() {
    try {
      const data = await readFile(this.path, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      return {'scores': []};
    }
  }

  async _write(data) {
    await writeFile(this.path, JSON.stringify(data), 'utf8');
  }

}

const database = new Database();

export { database };