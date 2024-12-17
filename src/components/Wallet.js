import React, { useState } from 'react';
import { addTransaction } from '../api';

const Wallet = ({ username, publicKey }) => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction(publicKey, toAddress, amount, privateKey);
      alert('Transaction added successfully');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={publicKey} readOnly placeholder="From Address" />
        <input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} placeholder="To Address" required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} placeholder="Private Key" required />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Wallet;
