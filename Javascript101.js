// isPalindrome("Long paragraph")

// isPalindrome(paragraph) {

//   var Cubs = "Cubs";
//   var Sox = "Sox";



//   var SportsTeams = [Cubs, Sox];

//   SportsTeams[0]; // "Cubs"
//   SportsTeams[1]; // "Sox"

//   var StuffILike = {
//     FavoriteBaseballTeam: "Cubs",
//     FavoritePet: "Dogs"
//   }

//   StuffILike.FavoriteBaseballTeam;  // "Cubs"
//   StuffILike.FavoritePet; // "Dogs"

//   BakeCookies(7, "Chocolate Chip");

//   var Dogs = "Dogs";
//   var Cats = "Cats";

//   var BakeCookies = function(numberOfCookies, ingredient) {
//     var Monkey = "Monkey";
    
//     putCookiesInOven(numberOfCookies);
//   }
  
//   BakeCookies( 4, "Sugar" );

//   ...(Monkey)
//   // Take the paragraph
//   // Look at each word

//   // Find the word
//   // Find what it is backwards
//     // Start on the left hand side, looking at each letter
//     // Look at the letters position
//     // See if that position is equal to the position relative to the end
//     // letter at n === letter at last + 1 - n
//     // if it is backward, save it and look at the next word

//     // otherwise, just look at the next word

// }
// 1234567
// racecar
// racecar
// banana
// ananab

// 123456  7
// banana

// N = 1
// 1 === 6
// B === A
// N = 2
// 2 === 6
// A === N

// // Find what it is backwards part 2
// // Read the word backwards
// // See if that backwards word is equal to the original


function AddSum(num1, num2) {
  
}

var AddSum = function(num1, num2) {
  var sum = num1 + num2;

  sum = Math.abs(sum);

  if(sum > 10) {
    console.log("Your number is larger than 10!")
  } else {
    console.log("Your number is smaller than 10!")
  }
  return sum;
};

var mySum = AddSum(-1, -2);
// Add multiple Sums together;

console.log(mySum);

