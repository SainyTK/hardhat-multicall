import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/config";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import 'solidity-coverage';

import accountUtils from './utils/accountUtils';
import { parseEther } from "ethers/lib/utils";

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      }
    ]
  },
  networks: {
    hardhat: {
      accounts: accountUtils.getAccounts().map(acc => ({ balance: parseEther('1000000000').toString(), privateKey: acc }))
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/bpo31oZp74S0Efp3h49vd8GcMa5mWKGE`,
      accounts: accountUtils.getAccounts(),
    },
    bsc_test: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: accountUtils.getAccounts(),
    },
    polygon_test: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/1PqRCjpoe18FDf-fKc6qPyVySXimFCQY`,
      accounts: accountUtils.getAccounts(),
    },
    optimism_test: {
      url: `https://opt-kovan.g.alchemy.com/v2/L49JdbEmwYPRSQwSEdFEGhfYOQg4z-u4`,
      accounts: accountUtils.getAccounts(),
    },
    arbitrum_test: {
      url: `https://arb-rinkeby.g.alchemy.com/v2/EUEjn0YZyFn_QcsAiKpbpUSyAaHH0hNo`,
      accounts: accountUtils.getAccounts(),
    },
    fantom_test: {
      url: `https://xapi.testnet.fantom.network/lachesis`,
      accounts: accountUtils.getAccounts(),
    },
    avax_test: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: accountUtils.getAccounts(),
    },
    one_test: {
      url: `https://api.s0.b.hmny.io`,
      accounts: accountUtils.getAccounts(),
    },
  },
};

export default config;