import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { loginUser } from '../api';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, privateKey);
      onLogin(username, response.publicKey);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} placeholder="Private Key" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
