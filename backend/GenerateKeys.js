const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate a new key pair
const key = ec.genKeyPair();

// Get the public and private key
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);
