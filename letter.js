//  * `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
var letter = function(letters) {
	this.lettersInWord = [];
	this.wrongLetters = [];
	this.blanksAndSuccesses = [];
};

module.exports = letter;