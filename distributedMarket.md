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
* Remix.etherium.org

* Etherium is written as a spec, making it mutable
* Bitcoin, on the other hand, is a lot more strict

#### Byzentine Fault Tolorence
* Can have N number of malicious nodes, and network will still maintain integrity

* ENCRYPTION IS NOT HASHING, AND HASHING IS NOT ENCRYPTION

#### ZK-Snark
* Allows you to show you have ownership of a computer
* Zero Knowledge proof, demonstrate that you own a computer without having to give away your password, similar to O-Auth

#### ECC
#### ECDSA
  * Key, built from eliptic curve problem.

# Healthcare Application for Blockchain Tech
## How do we protect privacy with blockchain systems?
Security is strong, based around who can modify a ledger. Cornerstone of blockchain tech.
Data privacy, however, is still nascent tech.

### Consortium Chains
* Multiple companies maintain a blockchain with privacy.
* Members sign traditional legal contracts for enforcement.
* Software runs a modified blockchain stack with fewer security guarentees in exchange for higher performance.

* Smart contracts are difficult to debug due to security concerns.

### USe cases in medicine
* Real time diagnostics
* Containerization of Enterprise Hospital Softare
* and...
  * Non HIPAA Data Markets
  * Massaging clinical data for Machine Learning
  * Pharmaceutical supply chain tracking
  * and...
    * Credential/Lecense Tracking
    * Point of Care Patient Incentive System
    * Standard of Care Protocol Authoring
    * Equipment Inspections

# Lung Cancer Screening
## Why a blockchain?
* Lack of cheap, good software to track patients
* Bridge communication gap
* Makes organizing sign-ups easier
* Incentivising patients to train ML machine with tokens. <----- Idea?

#Qtum basics
## Alternative to Etherium for smart contracts
* Account abstraction layer on top of fork of bitcoin core
* UTXO model scalability, with Etherium style contracts
* AAL allows for plug and play VMs
* X86 VM allows smart contracts to be written in any X86 compilable language
* All proof of stake

# Identity
## Holy Grail of Blockchain Technology

## Sovrin
* Basically a giant DNS for DIDs
* Validator + Observer Nodes
  * Access is exclusive to the service it's on, login has no chance of being used anywhere else.
### DID Keyring Analogy
* DID work as a keyring, where you can add individual keys.
* If anything happens to that company, your login info isn't compromised, as it can't be used anywhere else.

## UPort
* Built on top of etherium blockchain
* A complete digital representation of a person
* If you lose your key, your identity will be controlled by a smart contract that could recover your key based on some higher logic.

Dev@blockchainspaceman.com
312 823 2184

# Day 2
# Intro to Smart Contracts
## ERC 20
* spec for how a token should work
## Solidity
See MhubCoin.sol