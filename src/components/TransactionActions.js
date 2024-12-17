import React, { useState } from 'react';
import { addTransaction, mineBlock } from '../api';

const AddTransaction = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(fromAddress, toAddress, amount, privateKey);
    alert('Transaction added successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} placeholder="From Address" required />
      <input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} placeholder="To Address" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} placeholder="Private Key" required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

const MineBlock = () => {
  const [miningRewardAddress, setMiningRewardAddress] = useState('');

  const handleMine = async () => {
    await mineBlock(miningRewardAddress);
    alert('Block mined successfully');
  };

  return (
    <div>
      <input type="text" value={miningRewardAddress} onChange={(e) => setMiningRewardAddress(e.target.value)} placeholder="Mining Reward Address" required />
      <button onClick={handleMine}>Mine Block</button>
    </div>
  );
};

export { AddTransaction, MineBlock };
