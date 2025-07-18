/*
    1. Create public-private keypair. 
    2. Define a Message to sign. 
    3. Convert Message to UInt8Array. 
    4. Sign the message using the private key. 
    5. Verify the message using the Public key. 
*/

// import * as ed from "@noble/ed25519";

// async function main(){
//     // Generate a secure random private key. 
//     const privKey = ed.utils.
// }


// 
import {generateMnemonic, mnemonicToSeedSync } from "bip39";

const mneumonic = generateMnemonic(256);
const seed = mnemonicToSeedSync(mneumonic);
console.log(seed);

