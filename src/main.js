const { Blockchain, Transaction } = require('./blockchain');

let i_coin = new Blockchain();

i_coin.createTransaction(new Transaction("Address1", "Address2", 100));
i_coin.createTransaction(new Transaction("Address2", "Address1", 50));

console.log("\nStarting the miner ...");
i_coin.minePendingTransactions("Ivans-address");

console.log(
  "\nBalance of Ivan is " + i_coin.getBalanceOfAddress("Ivans-address")
);

console.log("\nStarting the miner ...");
i_coin.minePendingTransactions("Ivans-address");

console.log(
  "\nBalance of Ivan is " + i_coin.getBalanceOfAddress("Ivans-address")
);
