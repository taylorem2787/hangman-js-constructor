//============================MODULES=================================
//Load inquirer
var inquirer = request('inquirer');
var game = require('./game.js');
var word = require('./word.js');

var thisGame;

//============================FUNCTIONS=================================
//Generic function to check round

function checkRound() {
	//If player has 0 guesses left
	if (lettersinWord.toString() == blanksAndSuccesses.toString())
		console.log('===============================');
		console.log('YOU WON');
		console.log('===============================');

		//Exit Game
		process.exit();
	}

	else if (guessesLeft = 0){
		console.log('===============================');
		console.log('GAME OVER');
		console.log('===============================');
		
		//Exit Game
		process.exit();
	}

	playRound();

}


//Game Logic
function startGame () {

	inquirer.prompt([
	{
		type: "input",
		name: "guess",
		message: "Guess a letter"

	}
	]).then(function(game){
		if (game.guess < 9 || game.guess > 9) {
			console.log("Type your letter to guess");
		} 
		else {

		}

	})

//======================orginal hangman code====================




// 	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
// 	// lettersinWord = selectedWord.split("_");
// 	lettersinWord = selectedWord.split('')
// 	numBlanks = lettersinWord.length;

// 	// Reset
// 	guessesLeft = 9;
// 	wrongLetters = [];
// 	blanksAndSuccesses = [];

// 	// Populate blanks and sucesses with right number of blanks
// 	for (var i=0; i<numBlanks; i++) {
// 		blanksAndSuccesses.push("_");
// 	}

// 	// // Change HTML to reflect round conditions
// 	// document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
// 	// document.getElementById('numGuesses').innerHTML = guessesLeft;
// 	// document.getElementById("winCounter").innerHTML = winCount;
// 	// document.getElementById("lossCounter").innerHTML = lossCount;


// 	// // Testing / Debugging
// 	// console.log(selectedWord);
// 	// console.log(lettersinWord);
// 	// console.log(numBlanks);
// 	// console.log(blanksAndSuccesses);	
// }

// function checkLetters(letter) {
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

// 	// Update the HTML to reflect the most recent count stats
// 	// document.getElementById("numGuesses").innerHTML = guessesLeft;
// 	// document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
// 	// document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

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



//===============
// game = {
// 	wordOptions : Game.wordOptions,
// 	winCount 	: 0,
// 	guessesLeft : 9,
// 	wrongLetters: [],
// 	currentWord : null,

// startGame 	: function(words) {
// 	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
// 	lettersinWord = selectedWord.split('')
// 	numBlanks = lettersinWord.length;
// }


// // GLOBAL VARIABLES (rules) object
// //-------------------------------------------------
// // ARRAYS AND VARIATION FOR HOLDING DATA
// var wordOptions = ["kelly", "zack", "slater", "screech", "lisa", "jessie", "mrbelding"];
// var selectedWord = "";
// var lettersinWord = [];
// var numBlanks = 0;
// var blanksAndSuccesses = []; // s _ _ _ _ _ _ _ _
// var wrongLetters = [];



// // Game Counters
// var winCount = 0;
// var lossCount = 0;
// var guessesLeft = 9;