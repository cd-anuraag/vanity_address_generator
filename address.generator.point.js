const EC = require('elliptic');
const crypto = require('crypto');
const BN = require('bn.js');
const sha3 = require('js-sha3');
const targetPrefix = 'ab';

function generatePrivateKey() {
    return crypto.randomBytes(32).toString('hex');
}

function privateKeyToAddress(privateKey) {
    try {
        const ec = new EC.ec('secp256k1');

        const SK = new BN(privateKey, 16);

        const G = ec.g;
        const pp = G.mul(SK);

        const x = pp.getX().toBuffer();

        const y = pp.getY().toBuffer();

        const bt = Buffer.concat([x, y])

        const kc = sha3.keccak256(bt)

        return kc.slice(24)

    } catch (e) {
        console.log(e)
    }
}


(async () => {
    let addressFound = false;
    let privateKey, address;

    privateKey = generatePrivateKey();
    address = privateKeyToAddress(privateKey);

    while (!addressFound) {
        privateKey = generatePrivateKey();
        address = privateKeyToAddress(privateKey);


        if (address.startsWith(targetPrefix)) {
            addressFound = true;
        }
    }

    address = "0x" + address;

    console.log("Private Key: " + privateKey);
    console.log("Address: " + address);

})();


