pragma solidity ^0.4.19;

contract ZombieFactory {

    // declare our event here
    event NewZombie(uint zombieId, string name, uint dna);
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        // and fire it here
        NewZombie(id, _name, _dna);
    } 

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}


  

// // Here's how we would access our contract:
// var abi = /* abi generated by the compiler */
// var ZombieFactoryContract = web3.eth.contract(abi)
// var contractAddress = /* our contract address on Ethereum after deploying */
// var ZombieFactory = ZombieFactoryContract.at(contractAddress)
// // `ZombieFactory` has access to our contract's public functions and events

// // some sort of event listener to take the text input:
// $("#ourButton").click(function(e) {
//   var name = $("#nameInput").val()
//   // Call our contract's `createRandomZombie` function:
//   ZombieFactory.createRandomZombie(name)
// })

// // Listen for the `NewZombie` event, and update the UI
// var event = ZombieFactory.NewZombie(function(error, result) {
//   if (error) return
//   generateZombie(result.zombieId, result.name, result.dna)
// })

// // take the Zombie dna, and update our image
// function generateZombie(id, name, dna) {
//   let dnaStr = String(dna)
//   // pad DNA with leading zeroes if it's less than 16 characters
//   while (dnaStr.length < 16)
//     dnaStr = "0" + dnaStr

//   let zombieDetails = {
//     // first 2 digits make up the head. We have 7 possible heads, so % 7
//     // to get a number 0 - 6, then add 1 to make it 1 - 7. Then we have 7
//     // image files named "head1.png" through "head7.png" we load based on
//     // this number:
//     headChoice: dnaStr.substring(0, 2) % 7 + 1,
//     // 2nd 2 digits make up the eyes, 11 variations:
//     eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
//     // 6 variations of shirts:
//     shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
//     // last 6 digits control color. Updated using CSS filter: hue-rotate
//     // which has 360 degrees:
//     skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
//     eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
//     clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
//     zombieName: name,
//     zombieDescription: "A Level 1 CryptoZombie",
//   }
//   return zombieDetails
// }