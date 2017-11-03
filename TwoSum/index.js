/**
 * @Algorithm: Two Sum
 *
 * Build a function, which will receive two parameters.
 * One will be a numbers array, the other one will be a number.
 *
 * This algorithm should return to us, an array filled with every
 * pair of numbers from the numbers array, that adds up to the sum.
 *
 * @Example: [1, 6, 4, 5, 3, 3] and 7 => result = [[6, 1], [3, 4,], [3, 4]]
 *
 * @Rules:
 * 1. Result should be an array of arrays
 * 2. Any number can be used in multiple pairs
 */

`use strict`;

// O(n)
function twoSum(numArray, sum) {
	let pairs = [];
	let hashTable = [];

	for(let i = 0 ; i < numArray.length; i++){
		let currNum = numArray[i];
		let counterPart = sum - currNum;
		if(hashTable.indexOf(counterPart) !== -1){
			pairs.push([currNum, counterPart]);
		}
		hashTable.push(currNum);
	}

	return pairs;
}

console.log(twoSum([40, 11, 19, 17, -12], 28));

