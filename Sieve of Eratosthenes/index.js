/**
 * @Algorithm: Sieve of Eratosthenes
 *
 * The idea of this algorithm is to return all primer numbers
 * up to `num` in an array.
 *
 * @Example If we pass 20 as a parameter to this function, it should return
 * [2, 3, 5, 7, 11, 13, 17, 19]
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function sieveOfEratosthenes(n) {
	let primes = [];
	for(let i = 0; i <= n; i++){
		primes[i] = true;
	}

	primes[0] = false;
	primes[1] = false;

	/*
	 * @Optimization: Loop until square root of `n`.
	 *
	 * All non-prime numbers, will be marked
	 * as false, by the time `i` reaches square root of `n`.
	 */

	for(let i = 2; i <= Math.sqrt(n); i++){
		for(let j = 2; j * i <= n; j++){
			primes[j*i] = false;
		}
	}

	let result = [];
	for(let i = 0; i < primes.length; i++){
		if(primes[i]){
			result.push(i);
		}
	}

	return result;
}

console.log(sieveOfEratosthenes(20));