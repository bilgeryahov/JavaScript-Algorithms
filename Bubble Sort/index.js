/**
 * @Algorithm: Bubble Sort
 *
 * Function which takes unsorted array of numbers.
 * Using bubble sort, returns the array in a sorted
 * format.
 *
 * Initial: [5, 3, 7, 2, 9] Array length is 5
 *
 * First iteration  : 5  >  0 => [3, 5, 7, 2, 9] [3, 5, 7, 2, 9] [3, 5, 2, 7, 9] [3, 5, 2, 7, 9] [3, 5, 2, 7, 9] => 5-1
 * Second iteration : 4  >  0 => [3, 5, 2, 7, 9] [3, 2, 5, 7, 9] [3, 2, 5, 7, 9] [3, 2, 5, 7, 9] => 4-1
 * Third iteration  : 3  >  0 => [2, 3, 5, 7, 9] [2, 3, 5, 7, 9] [2, 3, 5, 7, 9] => 3-1
 * Fourth iteration : 2  >  0 => [2, 3, 5, 7, 9] [2, 3, 5, 7, 9]  => 2-1
 * Fifth iteration  : 1  >  0 => [2, 3, 5, 7, 9] => 1-1
 * Sixth iteration  : 0 !>  0 => Stop!
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function bubbleSort(arr) {
	// Iterate array length - 1 times.
	for(let i = arr.length; i > 0; i--){
		console.log(`Starting for ${i}`);
		for(let j = 0; j < i; j++){
			if(arr[j] > arr[j + 1]){
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
			console.log(arr);
		}
		console.log('----------------');
	}

	console.log('Final sorted');
	return arr;
}

console.log(bubbleSort([5, 3, 7, 2, 9]));