const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "7e6d3a7cfed9817db5641fe50062cd4235983c0e4e99211ea243845cba826412"
);
let i_coin = new Blockchain();
const myWalletAddress = myKey.getPublic("hex");

const tx1 = new Transaction(myWalletAddress, "public key goes here", 100);
tx1.signTransaction(myKey);
i_coin.addTransaction(tx1);

// i_coin.createTransaction(new Transaction("Address1", "Address2", 100));
// i_coin.createTransaction(new Transaction("Address2", "Address1", 50));

console.log("\nStarting the miner ...");
i_coin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of Ivan is " + i_coin.getBalanceOfAddress(myWalletAddress)
);

// console.log("\nStarting the miner ...");
// i_coin.minePendingTransactions("Ivans-address");

// console.log(
//   "\nBalance of Ivan is " + i_coin.getBalanceOfAddress("Ivans-address")
// );

console.log("Is chain valid " + i_coin.isChainValid);
