    //* `word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
    var randomOptions = require('random-options');

    var getWord = function() {
    	var 
    };

    module.exports = getWord;



//===================original hangman code========
//     function checkLetters(letter) {
// 	// Check if letter exists in word at all
// 	var isLetterInWord = false;
// 	for (var i=0; i<numBlanks; i++) {
// 		if(selectedWord[i] == letter) {
// 			isLetterInWord = true;
// 		}
// 	}

// 	// Check where in word letter exists, then populate out blanks and sucesses
// 	if (isLetterInWord) {
// 		for (var i=0; i<numBlanks; i++) {
// 			if(selectedWord[i] == letter) {
// 				blanksAndSuccesses[i] = letter;
// 			}
// 		}	
// 	}

// 	// Letter wasnt found
// 	else {
// 		wrongLetters.push(letter);
// 		guessesLeft	--
// 	}
// 	// Test and Debugging 
// 	console.log(blanksAndSuccesses);
// }

// function roundComplete() {
// 	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

// 	// Update the HTML to reflect the most recent count statss
// 	document.getElementById("numGuesses").innerHTML = guessesLeft;
// 	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
// 	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

// 	// Check is user won
// 	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
// 		//Timeout to let winning letter populate
// 		setTimeout(function(){ 
// 			winCount++;
// 			play("You Won!");
// 		// Update the win counter 
// 		document.getElementById("winCounter").innerHTML = winCount;
// 		document.getElementById("bell").innerHTML= 
// 		startGame();

// 		}, 1000);
// 	}

// 	// Check if user lost
// 	else if (guessesLeft == 0) {
// 		lossCount++;
// 		alert("You Lost!");

// 		// Update HTML 
// 		document.getElementById("lossCounter").innerHTML = lossCount;

// 		startGame();
// 	}
// }
// //MAIN PROCESS ()
// //--------------------------------------------------------------

// // Initiates the code the first time
// startGame();

// //Register keyclicks

// document.onkeyup = function(event) {
// 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	checkLetters(letterGuessed);
// 	roundComplete();

// 	//Testing / Debugging
// 	console.log(letterGuessed); 

// }
// function playSound (bell) {
// 	var thissound = document.getElementById(bell);
// 	thissound.play();
// }