const { ethers } = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

const rpcUrlHederatestnet = process.env.RPC_URL;
if (!rpcUrlHederatestnet || !rpcUrlHederatestnet.startsWith("http")) {
    throw new Error("Missing or invalid value in RPC_URL env var");
}

const web3Provider = new ethers.JsonRpcProvider(rpcUrlHederatestnet);

async function main() {
    try {
        const blockNumber = await web3Provider.getBlockNumber();
        console.log("block number", blockNumber);
    } catch (error) {
        console.error("Error getting block number:", error);
    }

    try {
        const balance = await web3Provider.getBalance(
            "0xcf63845a874e1a78bc2309442f77f7a571387319"
        );
        console.log("balance", balance);
    } catch (error) {
        console.error("Error getting balance:", error);
    }
}

main();