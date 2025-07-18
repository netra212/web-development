
let str = "helloThisIsNetra";
const binaryRepresentation = new TextEncoder().encode(str);
console.log(binaryRepresentation);

// Converting string into a Hex Array. 
function arrayToHex(byteArrays){
    let hexString = '';
    // [h, e, l, l, o]
    for (let i = 0; i < byteArrays.length; i++){
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
};

const str1 = "hello";
const byteArray1 = new TextEncoder().encode(str1)

const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to `Hello`. 
const hexString = arrayToHex(byteArray);
console.log(hexString);

// Base64
// 1 character = 6 bits. 
// 

// Base58


// Hashing Vs Encryption. 
// Hashing -> Convert data into 


// Encryption -> plaintext data into an unreadable format, called ciphertext, using a specific algorithms and key. 


// Common Asymmetric Encryption Algorithms:
// 1. RSA - Rivest-Shamir-Adleman used Primary Number. 
// 2. ECC - Elliptic Curve Cryptography (ECDSA) - ETH & BTC
// 3. 

