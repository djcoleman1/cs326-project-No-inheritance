import { database } from './database.js';

import express, { response } from 'express';
import logger from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

// READ
app.get('/topScores', (req, res) => {
  const scores = await database.getTopScores();
  res.json(scores);
});

// UPDATE
app.put('/newScore', (req, res) => {
  const player = req.body;
  await database.updateScore(player.name, player.score);
});

// CREATE
app.post('/newPlayer', (req, res) => {
  const player = req.body;
  await database.saveScore(player.name, player.score);
});

// DELETE
app.delete('/deletePlayer', (req, res) => {
  const name = req.body;
  await database.deletePlayer(name);
});