const ethers = require('ethers');
const crypto = require('crypto');

const targetPrefix = 'ab';

function generatePrivateKey() {
    return crypto.randomBytes(32).toString('hex');
}

function getAddressFromPrivateKey(privateKey) {
    let wallet = new ethers.Wallet(privateKey);
    return wallet.address.toLowerCase(); // Convert to lowercase for case-insensitive comparison
}

(async () => {
    let addressFound = false;
    let privateKey, address;

    while (!addressFound) {
        privateKey = generatePrivateKey();
        address = getAddressFromPrivateKey(privateKey);

        if (address.startsWith("0x" + targetPrefix)) {
            addressFound = true;
        }
    }

    console.log("Private Key: " + privateKey);
    console.log("Address: " + address);
})();
