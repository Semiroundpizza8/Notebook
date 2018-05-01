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

var singleNumber = function(nums) {
  while(nums.includes(nums[0], 1)) {
      nums.splice(nums.indexOf(nums.shift()), 1);
  }
  return nums[0];
};

/*-------------------
Move Zeroes
--------------------*/

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
// Could've replaced already checked numbers as I itterated through, then added in 0s up to .length

/*-------------------
Two Sum
--------------------*/

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

/*-------------------
Three Sum
--------------------*/
var threeSum = function(nums) {
  var result = []
  nums.sort(function(a,b) {
    return a-b
  })
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    var start = i + 1;
    var end = nums.length - 1
    var twoSum = 0 - nums[i]
    while (start < end) {
      if (nums[start] + nums[end] === twoSum) {
        result.push([nums[i], nums[start], nums[end]])
        while (nums[start] === nums[start + 1]) {
          start++
        }
        while (nums[end] === nums[end - 1]) {
          end--
        }
        start++
        end--
      } else if (nums[start] + nums[end] < twoSum) {
        start++
      } else {
        end--
      }
    }
  }
return result
};

/*-------------------
Matrix
-------------------*/
var setZeroes = function(matrix) {
  let colArr = new Set();
  let rowArr = new Set();
  for(var i=0; i<matrix.length; i++) {
      for(var j=0; j<matrix[i].length; j++) {
          if(matrix[i][j] === 0) {
              colArr.add(i);
              rowArr.add(j);
          }
      }
  }
  
  // Turn to arrays for convinience
  colArr = Array.from(colArr);
  rowArr = Array.from(rowArr);
  
  // turn all columns into 0s
  for(var k=0; k<colArr.length; k++) {
      for(var l=0; l<matrix[k].length; l++) {
          matrix[colArr[k]][l] = 0;
      }
  }
      
  // turn all rows into 0s
  for(var m=0; m<matrix.length; m++) {
      for(var n=0; n<rowArr.length; n++) {
          matrix[m][rowArr[n]] = 0;
      }
  }

};

/*-------------------
Group Anagrams
-------------------*/
var groupAnagrams = function(strs) {
  let map = {};
  let solutionIndex = 0;
  for(var i=0; i<strs.length; i++) {
      let anaType = [...strs[i]].sort().join();
      if(typeof map[anaType] === 'number') {
          // Navigate to correct bucket
          let anaIndex = map[anaType];
          strs[anaIndex].push(strs[i]);
      }
      else {
          // Log where in array the current ana is
          map[anaType] = solutionIndex;
          // Make into a bucket;
          strs[solutionIndex] = [strs[i]];
          solutionIndex++;
      }
  }
  return strs.splice(0, solutionIndex);
};