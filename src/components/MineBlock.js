import React, { useState } from 'react';
import { mineBlock } from '../api';

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

export default MineBlock;
