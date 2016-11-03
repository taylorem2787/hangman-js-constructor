var inquire   = require('inquirer');
var checkWord = require('./word.js')['word-import'];
var wordObj   = new checkWord();
    console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
    console.log('Welcome to Saved By The Bell Hangman! - Type a letter below to get started!');
    console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+')

//===========================================FUNCTIONS=====================================================
// MAINGAME FUNCTION
function mainGame(){
  inquire.prompt([{
    type    : "input",
    name    : "letter",
    message : '\n' + 'Type a letter:' + '\n' + 'The word is: ' + wordObj.wordArr.join(' '),
  }]).then(function(user){
    var userGuess = user.letter.toLowerCase();
      if (userGuess.length > 1 || userGuess.length === 0) { // prevent the user from inputting more than one letter
        console.log(' ');
        console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
        console.log('       ERROR: Type one letter at a time.');
        console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
        console.log(' ');
        mainGame(); // resets the function
      } 
      else if (wordObj.guessedLetters.indexOf(userGuess) > -1) { //prevent the user from entering a letter that was already entered
        console.log(' ');
        console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
        console.log('       You already guessed that letter');
        console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
        console.log(' ');
        mainGame();
      } 
      else{
        // RUNS CHECKFUNC IN WORD.JS
        wordObj.checkFunc(userGuess); 
          // converts the guessedLetters array to a string separated by spaces
          console.log('            ___________________________________________');
          console.log('           | --------------- GAME STATS -------------- | ');
          console.log('           | LETTERS YOU\'VE GUESSES:' + '[' + wordObj.guessedLetters.join(' ') + ']        |'); 
          console.log('           | REMAINING GUESSES: [' + wordObj.guessCount + ']                    |');
          console.log('           |___________________________________________|');
          // if the user has guessed all the letter/ if all the '_' have been switched to letters
          if (wordObj.currentWord.join('') === wordObj.wordArr.join('')){ 
            return
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+'); 
            console.log('                   YOU WON!!!!!');
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+')
          }
          else{
            if (wordObj.guessCount === 0) { // if the user has guess incorrectly 5 times
              console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+')
              console.log('                       BUMMER!!! YOU LOSE!!!');
              console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+')
              //converts the currentWord array into a string
              return 
              console.log('The Saved By The Bell character was:' + wordObj.currentWord.join('')); 
            };
              mainGame(); 
            };  
          };
    });
};

// STARTS THE APP
mainGame(); 


