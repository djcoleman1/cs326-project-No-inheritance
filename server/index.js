import { database } from './database.js';

import express from 'express';
import logger from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

// READ
app.get('/topScores', (req, res) => {

});

// UPDATE
app.put('/newScore', (req, res) => {

});

// CREATE
app.post('/newPlayer', (req, res) => {

});

// DELETE
app.delete('/deletePlayer', (req, res) => {

});