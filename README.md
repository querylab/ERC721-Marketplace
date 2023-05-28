## NFT-Marketplace 🛒💎🎴

This is a Simpy Tokens (NFTs) Market Place for a Sepolia Test Network  with scripts and deploys. Built with Solidity using Hardhat.

### Setting Up

### 1. Clone the repository

### 2. Install dependencies

```bash
$ cd ERC721-Marketplace
$ npm install --save-dev hardhat
$ npx hardhat
$ npm install --save dotenv @nomiclabs/hardhat-etherscan @openzeppelin/contracts
```
### 3. Change variables in hardhat.config.js and Marketplace.sol

```bash
# hardhat.config.js
$ ALCHEMY_API_KEY
$ SEPOLIA_PRIVATE_KEY
#Marketplace.sol
$ ERC721 token_contract

```

### 4. Deployment
```bash
$ npx hardhat clean
$ npx hardhat compile
```


``` bash
$ npx hardhat run scripts/deploynft.js --network sepolia
```

<a href="https://imgur.com/emLmb7B"><img src="https://i.imgur.com/emLmb7B.gif" title="source: imgur.com" /></a>


``` bash
$ npx hardhat run scripts/deploymarket.js --network sepolia
```

<a href="https://imgur.com/jncwCSH"><img src="https://i.imgur.com/jncwCSH.gif" title="source: imgur.com" /></a>


