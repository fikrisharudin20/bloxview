import React, { useState } from 'react';
import './App.css';
import './components/Login.css'; // Import the CSS file for styling
import Login from './components/Login';
import Wallet from './components/Wallet';

function App() {
  const [username, setUsername] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const handleLogin = (username, publicKey) => {
    setUsername(username);
    setPublicKey(publicKey);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BloxView</h1>
        <p className="motto">Empowering Transparency in Every Transaction</p>
      </header>
      <main>
        {username ? <Wallet username={username} publicKey={publicKey} /> : <Login onLogin={handleLogin} />}
      </main>
    </div>
  );
}

export default App;
