const path = require('path'); // gives cross-platform compatibility
const fs = require('fs'); // reads solidity file content
const solc = require('solc');


const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];