/**
 * @Algorithm: Max Stock Profit
 *
 * The function takes in array of prices as a parameter.
 * Returns the maximum profit of the day.
 *
 * @Example:
 *
 * [32, 46, 26, 38, 40, 48, 42]
 * Result should be 22 => buy at 26, sell at 48
 *
 * @Notes:
 * - If no profit is possible, return -1
 * - A max profit of 0 is treated as any other max profit value
 * - O(n) Linear Runtime
 *
 * @author Bilger Yahov <bayahov1@gmail.com>
 * @version 1.0.0
 * @copyright © 2017 Bilger Yahov, all rights reserved.
 */

`use strict`;

function maxStockProfit(prices) {
	let maxProfit = -1;
	let buyPrice = 0;
	let sellPrice = 0;

	let changeBuyPrice = true;

	for(let i = 0; i < prices.length; i++){
		if(changeBuyPrice){
			buyPrice = prices[i];
		}

		sellPrice = prices[i + 1];

		if(sellPrice < buyPrice){
			changeBuyPrice = true;
		}
		else {
			let tempProfit = sellPrice - buyPrice;
			if(tempProfit > maxProfit){
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
	}

	return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));