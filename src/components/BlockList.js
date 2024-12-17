import React, { useEffect, useState } from 'react';
import { getBlocks } from '../api';

const BlockList = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const data = await getBlocks();
      setBlocks(data);
    };
    fetchBlocks();
  }, []);

  return (
    <div>
      <h2>Blocks</h2>
      <ul>
        {blocks.map(block => (
          <li key={block.hash}>
            <p>Hash: {block.hash}</p>
            <p>Previous Hash: {block.previousHash}</p>
            <p>Timestamp: {new Date(block.timestamp).toLocaleString()}</p>
            <p>Transactions: {block.transactions.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlockList;
