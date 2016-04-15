'use strict';
const argv = require('minimist')(process.argv.slice(2));

const {RippleAPI} = require('ripple-lib');

let n = Number(argv.n || 1);
let alg = argv.a || argv.algorithm || 'ecdsa-secp256k1';

if(alg != 'ecdsa-secp256k1' && alg != 'ed25519') {
  console.log('ERROR: valid values for -a (--algorithm) option are \'ecdsa-secp256k1\' and \'ed25519\'');
  process.exit();
}

console.log("Generating ", n, alg, " (address, secret) pair(s)");

const api = new RippleAPI();

const params = { algorithm: alg };

for(let i = 0; i < n; i++) {
  let r = api.generateAddress(params);

  console.log(r.address, r.secret);
}

