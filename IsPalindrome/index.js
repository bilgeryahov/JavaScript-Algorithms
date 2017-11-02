/**
 * @Algorithm: Is Palindrome
 *
 * Build a function, which will receive a string as an argument.
 * It needs to return true if the string is a palindrome, false
 * otherwise.
 *
 * Examples of palindromes: race car, madam, i'm adam
 */

`use strict`;

function isPalindrome(textString) {
	textString = textString.toLowerCase();
	let charactersArr = textString.split('');
	let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let lettersArr = [];
	charactersArr.forEach(char => {
		if(validCharacters.indexOf(char) !== -1){
			lettersArr.push(char);
		}
	});

	return(lettersArr.join('') === lettersArr.reverse().join(''));
}

console.log(isPalindrome(`Madam, I'm Adam`));