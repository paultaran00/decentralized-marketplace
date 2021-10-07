require("@nomiclabs/hardhat-waffle");

const projectId = "9ac0a671833f48ab9029c33f2a2139cd"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  },
  solidity: "0.8.4",
};
