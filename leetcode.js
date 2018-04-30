/*-------------------
Remove Duplicates
--------------------*/

var removeDuplicates = function (nums) {
  let i = 0;
  console.log("Hi!", typeof nums[i]);
  while (typeof nums[i] === 'number') {
    console.log("Nums", nums)
    if (nums[i] === nums[i + 1]) nums.splice(i, 1);
    else i++;
  }
  return nums;
};

/*-------------------
Max Profits
--------------------*/
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let total = 0;
//     let currentTrend = 0;
//     for(var i=0; i<prices.length; i++) {
//         // Looking to Buy
//         if(prices[i] < prices[i + 1]) {
//             currentTrend = prices[i];
//         }

//         // Looking to Sell
//         else if(prices[i] > [prices[i + 1]] && currentTrend) {
//             total += prices[i] - currentTrend;
//             currentTrend = 0;
//         }
//     }
//     return total;
// };

// var maxProfit = function(prices) {
//     for(var i=0; i<prices.length; i++) {
//         if(prices[i] < prices[i + 1]) {
//             prices[i] = prices[i+1] - prices[i];
//         }
//         else {
//             prices[i] = 0;
//         }
//     }
//     return prices.reduce((a, b) => a + b);
// };

// var maxProfit = function (prices) {
//   let total = 0;
//   for (var i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       total += prices[i + 1] - prices[i];
//     }
//   }
//   return total;
// };

// var maxProfit = function (prices) {
//   let sum = 0;
//   for (let I = 0; I < prices.length - 1; I++) {
//     if (prices[I] < prices[I + 1]) { sum += prices[I + 1] - prices[I]; }
//   }
//   return sum;
// };

// var maxProfit = function (prices) {
//   let max = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       max += prices[i] - prices[i - 1];
//     }
//   }
//   return max;
// };

var maxProfit = function (prices) {
  let total = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) total += prices[i] - prices[i - 1];
  }
  return total;
};


/*-------------------
Contains Duplicate 
--------------------*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const cache = {}
//     for(var i=0; i<nums.length; i++) {
//         if(cache[nums[i]]) return true
//         else cache[nums[i]] = true;
//     }
//     return false;
// };

containsDuplicate = (nums) => new Set(nums).size !== nums.length

/*-------------------
Single Number
--------------------*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  while(nums.includes(nums[0], 1)) {
      nums.splice(nums.indexOf(nums.shift()), 1);
  }
  return nums[0];
};