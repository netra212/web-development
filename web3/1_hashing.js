const crypto = require("crypto");
const input = "100xdevs";
// Encryption algorithms: "sha256"
const hash = crypto.createHash("sha256").update(input).digest("hex")
console.log("Converted Hashed Input 1: ")
console.log(hash)

// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000
const crypto1 = require("crypto");
const inputToHash = "596138";
const hashedInput = crypto1.createHash("sha256").update(inputToHash).digest("hex");
console.log("Converted Hashed Input 2: ")
console.log(hashedInput)

