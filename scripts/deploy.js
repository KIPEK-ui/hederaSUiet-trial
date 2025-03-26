async function main() {
    const { ethers } = require("hardhat");
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for the ERC-20 token
    const ERC20Token = await ethers.getContractFactory("HederaSUiet", deployer);

    // Deploy the contract with the required parameters
    const contract = await ERC20Token.deploy();

    console.log("Contract deployed at:", contract.target);
}

main().catch(console.error);