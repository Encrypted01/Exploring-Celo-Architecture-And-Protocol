const celoSDK = require('celo-sdk');

const privateKey = '0xYourPrivateKey'; // Private key of the wallet
const recipientAddress = '0xRecipientAddress'; // Address of the recipient

// Create a Celo wallet using the private key
const wallet = celoSDK.wallet.privateKeyToAccount(privateKey);

// Set up the transaction parameters
const transactionParams = {
  from: wallet.address,
  to: recipientAddress,
  value: celoSDK.utils.toWei('1', 'ether'), // Amount to send in Celo wei
  gasPrice: celoSDK.utils.toWei('0.1', 'gwei'), // Gas price in Celo wei
};

// Send the transaction
celoSDK.wallet.sendTransaction(transactionParams)
  .then((transaction) => {
    console.log('Transaction successful:', transaction);
  })
  .catch((error) => {
    console.error('Transaction failed:', error);
  });
