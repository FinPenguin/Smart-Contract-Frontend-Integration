require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  // To setup the Polygon Testnet
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Jd-14noFCTcppkndVAtnQ0ZKTYvhrhtm",
      accounts: [
        `0x${"0024f94a8d364a030196a6239caeca74a6d121a74e64200973fb0231e8f6c363"}`,
      ],
    },
  },
};
