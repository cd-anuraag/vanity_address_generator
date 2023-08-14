const elliptic = require('elliptic');
const crypto = require('crypto');
const BigNumber = require('bn.js');
const jsSha3 = require('js-sha3');
const keccak256 = require('keccak256');
const targetPrefix = 'a';

const ec = new elliptic.ec('secp256k1');

function generatePrivateKey() {
    return crypto.randomBytes(32).toString('hex');
}

(async () => {
    let privateKey, address;
    privateKey = "f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315";
    const G = ec.g;

    const pp = G.mul(privateKey);
    const x = pp.getX().toString('hex')
    const y = pp.getY().toString('hex');
    const concat = (x + y);
    const hash = keccak256(concat).toString('hex');
    console.log(hash)
    // const hash = keccak256("").toString('hex');
    // console.log(hash)
    //
    //     if (address.startsWith(targetPrefix)) {
    //         break;
    //     }
    //     console.log("finding")
    // }
    // console.log('Private key: ', privateKey);
    // console.log('Address: ', address);

})();
