const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const blockchain = new Blockchain();
const users = {}; // Store users with their public and private keys

app.post('/register', (req, res) => {
  const { username, publicKey, privateKey } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users[username] = { publicKey, privateKey };
  res.json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
  const { username, privateKey } = req.body;
  const user = users[username];
  if (!user || user.privateKey !== privateKey) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful', publicKey: user.publicKey });
});

app.get('/blocks', (req, res) => {
  res.json(blockchain.chain);
});

app.get('/transactions', (req, res) => {
  const transactions = blockchain.chain.flatMap(block => block.transactions);
  res.json(transactions);
});

app.post('/transactions', (req, res) => {
  const { fromAddress, toAddress, amount, privateKey } = req.body;
  const key = ec.keyFromPrivate(privateKey);
  const transaction = new Transaction(fromAddress, toAddress, amount);
  transaction.sign(key);
  blockchain.addTransaction(transaction);
  res.json({ message: 'Transaction added successfully' });
});

app.post('/mine', (req, res) => {
  const { miningRewardAddress } = req.body;
  blockchain.minePendingTransactions(miningRewardAddress);
  res.json({ message: 'Block mined successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
