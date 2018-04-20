# Distributed Market Notes : Blockchain Academy

2 parts
* Part 1 is diving into technology.
  * What makes blockchain, blockchain.
* Part 2 is use cases.
  * Guest speakers who've dealt with blockchain before.

## PKI Encryption

### Symmetric Encryption

* 2 parties share a key
* Fast and simple, can be broken
  * If you know the key, it can be easily decyphered
  * i.e. Ceaser Cypher
* Same key you use to encode things, you use to decode things

### Asymmetric Encryption

* One key is used for encryption, and another is used for decryption
* Private key is for signing, and secrey key is for encryption

#### Signing,
You sign a message with your Private key such that anyone with your public key can decrypt.
* Anyone can decrypt it so long as they have the key
* Proves that it was you who sent out the message, since only you have the private key

#### Encryption
Enctypt with a public key, so that a private key is needed to decrypt
* Only reciept can read it
* Could've come from anyone

In bitcoin, we only sign messages, and dont need to encrypt. We want anyone to be able to read the message.

### Get your own PGP key
Keybase.io

PGP: A form of technology that utilizes PKI tech for emails

### Hashing
* Hashing, also called 'one way trap functions' take an input and turns it into an output of a fixed length
* Can convert to a hash, but can't convert back from a hash into what it was before
* PKI is like using a lockbox, while Hashing is more like cooking it in an irreversable manner

### Hashing(bitcoin mining)

* Hashing takes a string, and turns it into a string of fixed length
* Random outputs - easy to verify

1. Collects new transactions into a block
2. Compute block hash, if block hash is correct then you're done, else modify the block a little bit and recompute
  * A correct hash is computed by the difficulty, or the number of 0s at the beginning

## Etherium
Instead of trying to generate a random number, creates a seed
1. There exists a seed that can be computed for each block by scanning through the block headers up until a point
2. From the seed, can cumpute a 16 mb pseudorandom cache
3. From the cache, a 1gb dataset
4. Mining invlolves grabbing random slices of the dataset and hashing them together.

# Merkel Trees
A tree built upon transactions

Hashing children together creates the root, when you have a chain of tranactions, all you need is both halves of the Merkel path to see if they create the root together.
If both children create the root together, you know both halves match. With hash and original document, you can verify that the document didn't change.

## Consensus Protocols
* Centralized: Heigharchy
* Decentralized: Hub and connection to hub
* Destributed network: No node has any power over anyone else, equal share

#### Permissioned vs permissionless

* Who can write to a blockchain
* Accssibility

#### Public vs Private

* Who can read from a blockchain
* Visibility

* Permissionless public and Permissioned public are the most common
  * Permissionless and public is Bitcoin and Etherium
  * Permissioned and Public is Land Titles or Medical Records
* Corum blockchain

* DAO
  * People can use funds to be distributed into ideas

## Two Generals Problem (Byzentine Generals)
* Proof of work chain. Each general receives whichever plan he hears first, then sets his computer to soved a hash-based proof of work problem including the plan as a hash. 

## Proof of Stake
* Instead of computation power, you take a stake of coins.
* The person after you validates your block, and if youre found to be lying you lose your stake.
* The larger the stake, the more chances you have of being the block verifyer of that block.
* The reward in lying is less than the stake you'd be putting up, if you lie about it you stand to lose more than you gain.

## Bitcoin blocks and transactions

### Block data structure
* Magic Number  || Value always 0xD9B4BEF9
* Blocksize     || Number of bytes up to end of block
* Blockheader   || 
* Transaction c.||

### Blockheader
Contains information such as...
* Block verison: Version of block you're on
* Previous Block Hash: Location of previous block on chain
* Merkel Root: Root of all the transactions
* Timestamp: Time made
* Target: Difficulty
* Nonce: Header plus nonce will hash to blockhash

### TRansaction
* Version No.
* In-counter: Positive Int
* List of Inputs: The first input of first transaction is also called 'coinbase'
* Out Coutner
* List of Outputs: The outputs of the first transaction spend the mined bitcoins of the block
* Lock_time:

### Double spending problem
* IF more than 51% of the network is mallicious...
  * A block could be published saying you sent money, and another block is published again saying you made the same purchase
  * You'd have to build the block chain faster than its being created, but the amount of computational power you'd need to do that can probably be better used for something better.
  * More profitable to partake in bitcoin and validate than to double spend. Secure through clashing insentives.
  * Can double spend on smaller chains, but all that allows is you the ability to spend the same money twice.
    * NODE POISONING: All nodes your computer is connecting to are under your control, so all information client is getting are already under your control.
    * Targeted attacks can't be protected against as easily.

.......

### 
* Because Etherium block times are very low, so miner B may lose to miner A
* uncle blocks will give partial rewards to miner B
* So long as your answer is valid, you'll get some partial reward for the work you've done

### Gas
* Every step of a program costs gas.
* Code that is run via transaction.
* 
