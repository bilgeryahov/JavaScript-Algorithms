/**
 * @Algorithm: Reverse Words
 *
 * Build a function, which will receive a string as a parameter,
 * reverse every word in that string and return the new string.
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function reverseWords(str){
	let wordsArr = str.split(' ');
	let reversedWordsArr = [];

	wordsArr.forEach(word => {
		let reversedWord = '';
		for(let i = word.length - 1; i >= 0; i--){
			reversedWord += word[i];
		}
		reversedWordsArr.push(reversedWord);
	});

	return reversedWordsArr.join(' ');
}

console.log(reverseWords('Hello , I am Bilger Yahov . Alles goed mate ?'));