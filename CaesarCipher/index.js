/**
 * @Algorithm: Caesar Cipher
 *
 * Build a function, which will receive two parameters.
 * First one being a string, second one being a number.
 *
 * The function needs to shift all the letters given in
 * the string, by the number given as a parameter.
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function caesarCipher(str, num) {
	// Handle extreme cases. Length of the alphabet.
	num = num % 26;
	let lowerCaseString = str.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newString = '';

	for(let i = 0; i < lowerCaseString.length; i++){
		let currentLetter = lowerCaseString[i];
		if(currentLetter === ' '){
			newString += currentLetter;
			continue;
		}

		let currentIndex = alphabet.indexOf(currentLetter);
		let newIndex = currentIndex + num;

		// Repeat the alphabet, or go backwards.
		if(newIndex > 25){
			newIndex = newIndex - 26;
		}
		else if(newIndex < 0){
			newIndex = newIndex + 26;
		}

		// Check if upper case.
		if(str[i] === str[i].toUpperCase()){
			newString += alphabet[newIndex].toUpperCase();
		}
		else{
			newString += alphabet[newIndex];
		}
	}

	return newString;
}

// Bqq Mggrgt
console.log(caesarCipher('Zoo Keeper', 2));

// Lsq Mkb
console.log(caesarCipher('Big Car', -16));

// TkfkCmbszd
console.log(caesarCipher('JavaScript', -900));