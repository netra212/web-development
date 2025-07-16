// Function to find an input string that produces a hash starting with '00000'.
// This is the 'Proof of Work'. And This is the Brute force Approach. 
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if (hash.startsWith(prefix)) {
            return {
                input: inputStr,
                hash: hash
            }
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

// Q2. What if I ask that the 'input string' should start with '100xdevs' ? How would the code changes ?
/*
prefix      nonce               SHA-256             00000sdfioseuoewfh9wr09werwebkkhwerb2u0902
100xdevs    2274885
*/
function findHashWithPrefix100xdevs(prefix){
    let input = 0;

    while(true){
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if (hash.startsWith(prefix)){
            return {
                input: inputStr,
                hash: hash
            }
        }
        input++;
    }
}

// Find and print the input string and hash. 
const rs = findHashWithPrefix100xdevs("00000");
console.log(`Input: ${input.input}`);
console.log(`Hash: ${input.output}`);


// Q3. What If i ask you to "find" a nonce for the following input. 
// Netra => Raman | Rs 100
// Ram => Ankit | Rs 10
function findANonce(prefix){
    let input = 0;
    while(true){
        let inputStr = `Raman => | Rs 100
        Ram => Ankit | Rs 10` + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        
        if (hash.startsWith(prefix)){
            return {
                input: inputStr,
                hash: hash
            }
        }
        input++;
    }
}

const nonceResult = findHashWithPrefix100xdevs("000000");
console.log(`Input: ${input.input}`);
console.log(`Hash: ${input.output}`);





