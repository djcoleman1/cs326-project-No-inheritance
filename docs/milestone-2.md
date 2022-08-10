# *Team*: No-inheritance
# *Application*: Wordle With More Options

## **Team Overview**
Davis Coleman - djcoleman1

## **Application Idea**

A version of Wordle which has more word length options than just 5 letters, going down to four and up to seven (possibly eight). Performance is measured based on number of guesses -- e.g., for 5 letter word, correct guess on first attempt receives 5 points, after two guesses 4 points, etc. The same rules apply to easier words with 4 letters, and harder words with up to 7 (or 8, depending on how lazy I am) letters. It will have a dictionary of some few hundred or thousand words of length 4-8 letters.

## **Functionality**

The game Wordle With More Options will be pretty much the same as traditional Wordle. Given an unknown word containing 5 letters, and in this version also words with 4, 6, 7, 8 letters depending on the level the player chooses, the player has as many attempts as there are letters in the word to guess what the word is. Words may contain multiple of the same letter, but the number of attempts allowed are tied to length of the word not number of unique letters. The fewer attempts it takes for the player to guess the word, the higher their score, and they only get 1 point if they guess correctly on their last attempt. For an attempt where the guess was incorrect, any letters which are in the correct word are highlighted: letters are highlighted green if they are in the index matching their place in the correct word; letters are highlighted yellow if they are in the correct word, but are out of position in the guessed word. For instance, if the correct word were GRASS, and I guessed SHARK, after I hit enter the A would be highlighted green, and the R and S would be highlighted yellow. There may be a multiplayer mode, where two players are pitted against each other to solve some *x* number of words, and the player with the higher score at the end wins.

### Picture of wordle in web browser
![Wordle](./Wordle-Screenshot.png)

The board of 6 rows by 5 columns is the area where the word guesses and attempts go. The keyboard, which will be centered when I figure it out, has all the letters in the alphabet. When fully functioning, it will place the letter last clicked on the current spot in the current attempt row. The enter and backspace buttons, which will also be centered, will compare the current guess with the correct word (moving onto the next row/attempt), and remove the last letter that was put on the board, respectively.



### **Link to video demonstration**
https://www.loom.com/share/c88dace025384ac4b78183078dc2f7a2