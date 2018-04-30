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

/*-------------------
Move Zeroes
--------------------*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let endOfArr = nums.length;
  let i = 0;
  while(i < endOfArr) {
      if(nums[i] === 0) {
          nums.push(...nums.splice(i, 1));
          endOfArr--;
      }
      else {
          i++;
      }
  }
};

/*-------------------
Two Sum
--------------------*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i=0
  let cache = {};
  while(i < nums.length) {
      let numNeeded = target - nums[i];
      if(cache[numNeeded] !== undefined) return [cache[numNeeded], i];
      else cache[nums[i]] = i++;
  }
  return -1;
};
