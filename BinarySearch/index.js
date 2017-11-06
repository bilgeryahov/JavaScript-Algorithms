/**
 * @Algorithm: Binary Search
 *
 * Search for a given value (key) inside of a list (numArray).
 * Runs in O(log n) run time - very performant.
 * Can be written as a recursive function.
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function binarySearch(numArray, key) {
	let middleIdx = Math.floor(numArray.length / 2);
	let middleElem = numArray[middleIdx];

	if(middleElem === key){
		return true;
	}
	else if(middleElem < key && numArray.length > 1){
		return binarySearch(numArray.splice(middleIdx, numArray.length), key);
	}
	else if(middleElem > key && numArray.length > 1){
		return binarySearch(numArray.splice(0, middleIdx), key);
	}
	else{
		return false;
	}
}

// Sorted array!
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 12));