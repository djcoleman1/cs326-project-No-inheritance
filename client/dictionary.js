class Dictionary {
  constructor() {
    this.words = [];
  }

  async loadDictionary() {
    const response = await fetch('dictionary.json');
    temp = response.json();
    const self = this;
    temp.forEach( (word) => {
      if (word.length === 5) {
        self.words.push(word);
      }
    });
  }

  getWords() {
    return this.words;
  }
}

const dictionary = new Dictionary();
export {dictionary};