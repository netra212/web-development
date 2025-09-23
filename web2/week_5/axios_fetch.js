// Axios vs fetch.
const axios = require("axios");

// POST.
// change request method.
// sedn body.
// sender headers.
async function main(){
    const response = await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851", 
        {
        method: "POST",
        body: {
            username: "netra",
            password: "12345"
        },
        headers: {
            Authorization: "Bearer 123"
        }
    });
    const textualData = await response.text();
    console.log(textualData);
}

// axios Implementation. 
async function main() {
    const response = await axios.post(
        "https://httpdump.app/dumps/bc6a57a3-2b2d-484b-aa52-7d6ba6141480", {
            username: "netra",
            password: "12345"
    },
    {
        headers: {
            Authorization: "Bearer 123"
        },
    },
    );
    console.log(response.data)
}
