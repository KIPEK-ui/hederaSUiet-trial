async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for the ERC-20 token
    const ERC20Token = await ethers.getContractFactory("HederaSUiet", deployer);

    // Deploy the contract with the required parameters
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // Adjust initial supply as needed
    const contract = await ERC20Token.deploy(initialSupply);

    console.log("Contract deployed at:", contract.target);
}

main().catch(console.error);