import React, { useEffect, useState } from 'react';
import { getTransactions } from '../api';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            <p>From: {tx.fromAddress}</p>
            <p>To: {tx.toAddress}</p>
            <p>Amount: {tx.amount}</p>
            <p>Timestamp: {new Date(tx.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
