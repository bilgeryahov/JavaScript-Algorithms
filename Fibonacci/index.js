/**
 * @Algorithm: Fibonacci
 *
 * Create a function, which receives one parameter. The
 * parameter should be a number, indicating a position.
 * A number at that position from the Fibonacci sequence
 * should be returned.
 *
 * @Example: fibonacci(4) returns 3; fibonacci(9) returns 34...
 */

`use strict`;

function fibonacci(position) {
	if(position < 3){
		return 1;
	}
	else{
		return fibonacci(position - 1) + fibonacci(position - 2);
	}
}

console.log(fibonacci(9));