// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre, { ethers } from "hardhat";
import addressUtils from '../utils/addressUtils';

async function main() {

  const [signer] = await  ethers.getSigners();

  console.log("Balance: ", await signer.getBalance(signer.address));

  // We get the contract to deploy
  const Multicall = await ethers.getContractFactory("Multicall");
  const multicall = await Multicall.deploy();

  await multicall.deployed();

  console.log("Multicall deployed to:", multicall.address);

  await addressUtils.saveAddresses(hre.network.name, { Multicall: multicall.address })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
