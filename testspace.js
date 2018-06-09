// console.log([[][[]]+[]][+[]][++[+[]][+[]]]);
// console.log([[][[]]+[]][+[]][++[+[]][+[]]]);

// console.log((+[[]+(1|[])+(1<<1+1)+(1<<1^11>>1)+(~1+1e1)+(1|1<<1)])[[([]+!!{})[11.11>>11.11]+[[]+{1:1}+[]][+(111>111)][1|1>>1|1]]+([111/!{}+/1/][+(111<111)][([]+{111:111}+[])[1e1>>1|1]+[[],[{}]+[{}]][1<<1>>1][1]+([][11]+[])[1|1]+[{},1e1,!1+[]][1+!![1]][1<<1^1]+(111/!1+[])[1-~1<<1]+[!!{}+{}][.1^!1][+!!1]+([][1]+[])[[]&111]+[{},[]+{}+[],1][1&1][1+1e1+1]+(!!1+/-/)[+[]]+([]+{1:1}+[])[1%11]+[!!1+{}][111.111>>111.111][111%11]]+[])[(!{}+{})[1^1<<1]+[/=/,[]+[][1]][1|1][11>>>11]+([]+{}+[])[-~1]+[1,!/~/+{}][~~1][1<<1^1]+(11/!1+/1/)[11+1>>1]+[[]+!!{}][11>>11][1|[]]]((~1+11)+((11>>>11)==([]+/-/[(!!1+/-/)[+(111>111)]+(!!{}+[])[1|1<<1]+(!/~/+{})[1|1<<1]+(!!1+/-/)[1>>>1]])[!11+!11]),~1+1e1+~1)](~1-~1e1<<1<<1));

var testArr = [1, 4, 6, 9, 15];

function pairSum(arr, target) {
  var storageArr = [];
  for (var i = 0; i < (arr.length); i++) {
    if (storageArr[target - arr[i]]) {
      return true;
    }
    storageArr[arr[i]] = true;
  }
  return false;  
}

function pairSum(arr, target) {
  var leftIdx = 0, rightIdx = arr.length - 1;

  while (leftIdx !== rightIdx) {
    var currSum = arr[leftIdx] + arr[rightIdx];

    if (currSum === target) return true;
    else if (currSum < target) leftIdx++;
    else rightIdx--;
  }

  return false;
}

console.log(pairSum(testArr, 5)) // true
console.log(pairSum(testArr, 10)) // true
console.log(pairSum(testArr, 2)) // false
console.log(pairSum(testArr, 8)) // false
console.log(pairSum(testArr, 16)) // true  