/**
 * @Algorithm: Harmless Ransom Note
 *
 * Build a function, which will receive two parameters. One of them being
 * a note text, the other one - magazine text.
 *
 * This function, needs to create the note text, using the words inside the
 * magazine text.
 */

`use strict`;

/**
 * Has a Linear Time Complexity.
 * Two loops, which are not nested.
 * O(n+m)
 *
 * @param noteText
 * @param magazineText
 *
 * @return {boolean}
 */

function harmlessRansomNote(noteText, magazineText) {
	let noteArr = noteText.split(' ');
	let magazineArr = magazineText.split(' ');

	// Hash-table.
	let magazineObj = {};
	magazineArr.forEach(word => {
		if(!magazineObj.hasOwnProperty(word)){
			magazineObj[word] = 0;
		}
		magazineObj[word]++;
	});

	let noteIsPossible = true;
	noteArr.forEach(word => {
		if(magazineObj.hasOwnProperty(word)){
			magazineObj[word]--;
			if(magazineObj[word] < 0){
				noteIsPossible = false;
			}
		}
		else{
			noteIsPossible = false;
		}
	});

	return noteIsPossible;
}



const isWorking = harmlessRansomNote('this is a secret note for you from a secret admirer',
	'puerto rico is a place of great wonder and excitement it has many ' +
	' waterfall locations secret that i am an admirer of you must hike quite ' +
	'a distance to find the secret places as they are far from populated areas ' +
	'but it is worth the effort a tip i have for you is to ' +
	'go early in the morning when it is not so hot out also note that you must ' +
	'wear hiking boots this is one of the best places i have ever visited');

console.log(isWorking);