pragma solidity ^0.4.18;

contract MhubCoin {

    uint256 public maxSupply;
    uint256 public maxSupply;
    address public owner;

    // Very memory efficient
    mapping (address => uint256) balances;

    // Modifier
    modifier _onlyOwner
    /*
    function constructor
    msg.sender gets information about the person executing the function.
    tx.origin gets the information of the person who initiated the whole chain.
    */
    function MhubCoin (uint256 _maxSupply)
        public {
        owner = msg.sender;
        maxSupply = _maxSupply;
    }


    // Fallback function, default hence no function name.
	// 		payable means that you can send ether here.
    function ()
    public
    payable {
    // Exit this transaction and return whatevers happening.
    // 		Used to show error has been triggered.
    revert();
    }

    function setMaxSupply(uint256 newMaxSupply)
    _onlyOwner
    public {
        maxSupply = newMaxSupply;
    }

    // Read doesn't cost any gas, so these keywords are needed in order to estimate how much gas would be required
    function balance(address user) 
    public 
    // View is anything that doesn't modify any state.
    view // Only reads from the chain, optimization that makes it cheaper. Going to modify but wont change state.
    returns(uint256) {
        returns balances[user];
    }
    
    function transfer(address newOwner, uint256 amount)
    public {
        require(balance(msg.sender) >= amount);
        // Take money from old owner
        balances[msg.sender] -= amount;
        // Give money to new owner
        balances[newOwner] += amount;
    }

    function onePlusOne()
    public
    // Pure is where everything needed is already within the function.
    pure
    returns(uint256)
    {
        return 1 + 1;
    }

    function buyTokens()
    public
    payable
    {
        currentSupply += msg.value;
        // Require is a check, if this isn't true, then throw. Reverts and cancels transaction as if it never happened.
        // After a revert triggers, nothing else matters. Gas up to revert is still used though.
        // Concurrency isn't a consideration, it comes down to whoever is picked up first by miners.
        require(currentSupply <= maxSupply);
        balances[msg.sender] += msg.value;
    }
}