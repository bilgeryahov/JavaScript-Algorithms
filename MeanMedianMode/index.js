/**
 * @Algorithm: Mean Median Mode
 *
 * Build a function, which will receive a number array as a parameter.
 * It will return return an object with three properties:
 * - mean: the mean value
 * - median: the median value
 * - mode: the mode value
 */

`use strict`;

function meanMedianMode(arr) {
	return{
		mean: getMean(arr),
		median: getMedian(arr),
		mode: getMode(arr)
	}
}

function getMean(arr){
	let sum = 0;

	arr.forEach(num => {
		sum += num;
	});

	return sum / arr.length;
}

function getMedian(arr){
	arr.sort(function (a, b) {
		return a-b;
	});

	let median;
	if(arr.length % 2 !== 0){
		median = arr[Math.floor(arr.length / 2)];
	}
	else{
		let mid1 = arr[(arr.length / 2) - 1];
		let mid2 = arr[(arr.length / 2)];
		median = (mid1 + mid2) / 2;
	}

	return median;
}

function getMode(arr){
	let modeObj = {};

	// Hash-table.
	arr.forEach(num => {
		if(!modeObj.hasOwnProperty(num)){
			modeObj[num] = 0;
		}
		modeObj[num] ++;
	});

	let maxFrequency = 0;
	let modes = [];

	for(let num in modeObj){
		if(!modeObj.hasOwnProperty(num)){
			continue;
		}

		if(modeObj[num] > maxFrequency){
			modes = [ num ];
			maxFrequency = modeObj[num];
		}
		else if(modeObj[num] === maxFrequency){
			modes.push(num);
		}
	}

	// Check if all of them appear the same number of times.
	if(modes.length === Object.keys(modeObj).length){
		modes = [];
	}

	return modes;
}

/**
 * Expected result:
 * {
 *  mean: 3.25
 *  median: 3.5
 *  mode: [1, 4]
 * }
 */

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));

/**
 * Expected result:
 * {
 *  mean: 14
 *  median: 10
 *  mode: []
 * }
 */

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));