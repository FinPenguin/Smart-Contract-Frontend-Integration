const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.parseEther("0.001");

  // const nftMarketplace = await hre.ethers.deployContract("NFTMarketplace");

  // await nftMarketplace.deployed();

  // console.log(` Deployed Contract Address ${nftMarketplace.target}`);

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  console.log(`Deployed to ${nftMarketplace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
