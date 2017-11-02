/**
 * @Algorithm: FizzBuzz
 *
 * Build a function, which will receive a number as a parameter.
 * Print all the numbers from 1 to the one passed as a parameter.
 *
 * If the number to be printed is divisible by 3, print `Fizz`.
 * If the number to be printed is divisible by 5, print `Buzz`.
 * If the number to be printed is divisible by both 3 and 5, print `FizzBuzz`.
 * Otherwise print just the number.
 */

`use strict`;

function fizzBuzz(number){
	for(let counter = 1; counter <= number; counter++ ){
		if(counter % 3 === 0 && counter % 5 === 0){
			console.log('FizzBuzz');
		}
		else if(counter % 3 === 0){
			console.log('Fizz');
		}
		else if(counter % 5 === 0){
			console.log('Buzz');
		}
		else{
			console.log(counter);
		}
	}
}

fizzBuzz(30);