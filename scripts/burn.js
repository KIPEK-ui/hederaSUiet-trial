async function main() {
    // Get the signer of the tx and address for minting the token
    const [deployer] = await ethers.getSigners();

    // Get the ContractFactory of your MyToken ERC-721 contract
    const MyToken = await ethers.getContractFactory("HederaSUiet", deployer);

    // Connect to the deployed contract
    // (REPLACE WITH YOUR CONTRACT ADDRESS)
    const contractAddress = "0x2173c2A6A269A27F196F23B898406766178b6b21";
    const contract = await MyToken.attach(contractAddress);

    // Burn the token
    const burnTx = await contract.burn(0);
    await burnTx.wait();
    console.log("Burned token with ID:", 0);

    // Check the balance of the token
    const balance = await contract.balanceOf(deployer.address);
    console.log("Balance:", balance.toString(), "NFTs");
}

main().catch(console.error);