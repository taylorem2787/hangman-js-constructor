//=====================================CONSTRUCTOR FILE==============================================
function Letter(theWord){
  // TURN STRING INTO AN ARRAY
  this.word = theWord.split('');

  this.LetterFunc = function() {
    var wordArr = [];
    // CREATES AN ARRAY W/ '_' TO MATCH LENGTH OF WORD
    for(i = 0; i < this.word.length; i++){ 
      wordArr.push('_');
    };
      return wordArr;
  };
  // GRABS BLANK ARRAY FROM LETTERFUNC
  this.blankWordArr = this.LetterFunc(); 
  // USER LETTER GUESS CHECKER
  this.checkLetter = function(blankWordArr, realWord, userInput, index){ 
    // IF USERS GUESS IS IN THE BLANK LETTER INDEX
    if (realWord[index].toLowerCase() === userInput){ 
      // POPULATE THE USER'S CORRECT LETTER GUESS TO REFLECT IT IN THE BLANK LETTER INDEX 
      blankWordArr[index] = realWord[index]; 
    };
  };
};

module.exports['letter-import'] = Letter;
