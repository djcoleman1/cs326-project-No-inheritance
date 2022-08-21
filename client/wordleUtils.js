import {dictionary} from './dictionary.js';

await dictionary.loadDictionary();

export function getRandomWord() {
  const dict = dictionary.getWords();
  return dict[Math.floor(Math.Random(dict.length))];
}