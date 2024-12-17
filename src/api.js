import axios from 'axios';

const API_URL = 'http://localhost:5000';

const registerUser = async (username, publicKey, privateKey) => {
  const response = await axios.post(`${API_URL}/register`, { username, publicKey, privateKey });
  return response.data;
};

// Example 
const username = 'prav';
const publicKey = '04d87d40ba891b17ec73e33c5e68ab66db8f63dc5c036fcb71a7aaaf9eb99a5d4a7739178a99922c578befdafa5f6781945dc21e91b6f0e817bf9cf2985904a561';
const privateKey = '7b3b5364f901c93f6be327c3eab819e9a43aa82658530334c998840297832d57';

registerUser(username, publicKey, privateKey)
  .then(response => console.log(response))
  .catch(error => console.error(error));

export const loginUser = async (username, privateKey) => {
  const response = await axios.post(`${API_URL}/login`, { username, privateKey });
  return response.data;
};

export const getBlocks = async () => {
  const response = await axios.get(`${API_URL}/blocks`);
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};

export const addTransaction = async (fromAddress, toAddress, amount, privateKey) => {
  const response = await axios.post(`${API_URL}/transactions`, { fromAddress, toAddress, amount, privateKey });
  return response.data;
};

export const mineBlock = async (miningRewardAddress) => {
  const response = await axios.post(`${API_URL}/mine`, { miningRewardAddress });
  return response.data;
};
