/**
 * @Algorithm: Merge Sort
 *
 * The algorithm will be comprised of two separate functions.
 * The first function takes an array as a single parameter.
 * The second function takes two sorted arrays as parameters.
 *
 * @Example:
 *                            mergeSort([4, 3, 2, 1])
 *                                FH = [4, 3]
 *                                SH = [2, 1]
 *               return merge(mergeSort([4, 3]), mergeSort([2, 1]))
 *
 *
 *           FH = [4]                                               FH = [2]
 *           SH = [3]                                               SH = [1]
 *   return merge(mergeSort([4]), mergeSort([3]))  return merge(mergeSort([2]), mergeSort([1]))
 *
 *                  return merge([4], [3])                      return merge([2], [1])
 *
 *                      return [3, 4]                               return [1, 2]
 *
 *                                      return merge([3, 4], [1, 2])
 *
 *                                         return [1, 2, 3, 4]
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function mergeSort(arr) {
	if(arr.length < 2){
		return arr;
	}

	let middleIndex = Math.floor(arr.length / 2);
	let firstHalf = arr.slice(0, middleIndex);
	let secondHalf = arr.slice(middleIndex);

	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
	let result = [];
	while(arr1.length && arr2.length){
		let minElem;
		if(arr1[0] < arr2[0]){
			minElem = arr1.shift();
		}
		else{
			minElem = arr2.shift();
		}
		result.push(minElem);
	}

	if(arr1.length){
		result = result.concat(arr1);
	}
	else{
		result = result.concat(arr2);
	}

	return result;
}

console.log(mergeSort([5, 7, 3, 7, 8, 1, 0, 11, 98, 25]));