// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();


    // Get the ContractFactories and Signers here.
const NFT = await ethers.getContractFactory("NFT");
//const Marketplace = await ethers.getContractFactory("Marketplace");
// deploy contracts
const nft = await NFT.deploy();
//const marketplace = await Marketplace.deploy();



console.log("************************************************************************");
console.log("Deploying contracts with the account ==>", deployer.address);
console.log("Account balance:", (await deployer.getBalance()).toString());
console.log("************************************************************************ \n");
console.log("NFT Contract Address ");
console.log(await nft.address);
console.log("-------------------------------------------------------------------------");




// Save copies of each contracts abi and address to the frontend.
//saveFrontendFiles(marketplace , "Marketplace");
saveFrontendFiles(nft , "NFT");

}//End Main

function saveFrontendFiles(contract, name) {
const fs = require("fs");
const contractsDir = __dirname + "/../frontend/contractsData";

if (!fs.existsSync(contractsDir)) {
  fs.mkdirSync(contractsDir);
}

fs.writeFileSync(
  contractsDir + `/${name}-address.json`,
  JSON.stringify({ address: contract.address }, undefined, 2)
);

const contractArtifact = artifacts.readArtifactSync(name);

fs.writeFileSync(
  contractsDir + `/${name}.json`,
  JSON.stringify(contractArtifact, null, 2)
);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});