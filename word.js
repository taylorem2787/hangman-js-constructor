var randomWord = require('./game.js')['random-word'];
var userLetter = require('./letter.js')['letter-import'];
// OBJ USED IN LETTER CONSTRUCTOR - TAKES RANDOMLY SELECTED STRING AS PARAMETER 
var lettObj = new userLetter(randomWord()); 
var wordObj = new Word();

function Word(word){
  this.guessedLetters = [];
  this.guessCount = 9; // USER GUESSES
  this.currentWord = lettObj.word; // SETS VALUE TO THE VALUE IN LETTER OBJ. 
  this.wordArr = lettObj.blankWordArr;

  this.checkFunc = function(userInput) {
    // CHECKS LOWER/UPPER CASE LETTER 
    if (this.currentWord.indexOf(userInput.toLowerCase()) >= 0 || this.currentWord.indexOf(userInput.toUpperCase()) >= 0){
        console.log('===========================================================================')
        console.log('_______________________________ RIGHT! ____________________________________');
        // PUSHES LETTER GUESSED INTO ARRAY
        this.guessedLetters.push(userInput);
      // LOOPS THROUGH CURRENT WORD
      for (var i=0; i<this.currentWord.length; i++){ 
          //adds the parameters to the check letter function stored in lettObj
          lettObj.checkLetter(this.wordArr, this.currentWord, userInput, i); 
      };
    } 
      else {
        console.log('===========================================================================')
        console.log('_________________________ WRONG - TRY AGAIN! ______________________________')
        
        // DECREMENT 
        this.guessCount--;
        // PUSHES LETTER GUESSED INTO ARRAY
        this.guessedLetters.push(userInput); 
    };
  };
};

module.exports['word-import'] = Word;


