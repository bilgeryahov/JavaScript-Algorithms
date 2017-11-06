/**
 * @Algorithm: Memoized Fibonacci
 *
 * The function will take two parameters. First one being index
 * of the number in the fibonacci sequence.
 *
 * The algorithm also will take "cache" as a parameter.
 * This will be an array.
 *
 * Memoization:
 * -> Check to see if number already exists in cache
 * -> If number is in cache, use that number
 * -> If number is not in cache, calculate it and put it
 *    in cache, so it can be used multiple times in future
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;


/**
 * O(n) Linear Time Complexity.
 *
 * @param index
 * @param cache
 *
 * @return {*}
 */

function fibMemo(index, cache) {
	console.log(`I am starting for ${index}`);
	cache = cache || [];
	if(cache[index]){
		console.log(`I found for ${index} in the cache now!`);
		return cache[index];
	}
	else{
		if(index < 3){
			console.log(`Reached smaller than 3`);
			return 1;
		}
		else{
			console.log(`I am doing recursion for ${index}`);
			cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
		}
	}

	return cache[index];
}

console.log(fibMemo(50));