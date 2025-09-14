import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

// psql 'postgresql://neondb_owner:npg_lDXJ2uzEVg8L@ep-silent-shadow-addrnlra-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const pgClient = new Client(
    user: "neondb_owner",
    password: "npg_lDXJ2uzEVg8L",
    port: ,
    host: "",
    database: "",
    ssl: true
)

async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response);
}

main();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try{
        const response = await pgClient.query(`INSERT INTO users (username, password, email) VALUES ('${username}', '${email}', '${password}');`);

        res.json({
            message: "You have signed up"
        })
    } catch(e){
        console.log(e);
    }
})

app.listen(3000);
