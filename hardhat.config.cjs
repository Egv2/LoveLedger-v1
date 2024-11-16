require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  networks: {
    // amoy: {
    //   url: "https://polygon-amoy.g.alchemy.com/v2/SmSuvS0KEdXyGaPtGixXXZROT1ApboHS",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/SmSuvS0KEdXyGaPtGixXXZROT1ApboHS",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  solidity: "0.8.0",
};
