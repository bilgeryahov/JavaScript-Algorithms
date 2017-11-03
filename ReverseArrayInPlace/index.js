/**
 * @Algorithm: Reverse Array In Place
 *
 * Build a function, which will receive an array as a parameter.
 * Reverse that array, return the reversed array.
 *
 * @Note: Manipulate the passed in array, do NOT create a new
 * one.
 */

`use strict`;

function reverseArrayInPlace(arr) {
	// Only the first half, otherwise the array will not change.
	for(let i = 0; i < arr.length / 2; i++){
		let tempVar = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempVar;
	}

	return arr;
}

console.log(reverseArrayInPlace(['this', 'is', 'how', 'i', 'test', 'stuff']));