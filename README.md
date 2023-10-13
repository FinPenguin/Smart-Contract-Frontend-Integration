# Sample Hardhat Project

This project demonstrates a complete NFT Marketplace. It comes with a complete Frontend including a Backend connectivity support. It has a smart contract which implements all the functions of an NFT Marketplace. It only has support for ERC721 Tokens as of now.

To run the environment:

```shell
npm install
npx hardhat node
```

To run a local blockchain, provided with Hardhat Support.

Then in a new terminal:

```shell
npx hardhat run scripts/deploy.js --network localhost
```

To deploy the contract on the hardhat blockchain on a local network. Then to run the server:

```shell
npm run dev
```

Try running some of the extra following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
