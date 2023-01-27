const { MongoClient } = require('mongodb');
require("dotenv").config();

async function main() {
    const USERNAME = process.env.MDB_USERNAME;
    const PASSWORD = process.env.MDB_PASSWORD;

    const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@wallet-manager.mqja7uo.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        const WalletUsers=await client.db("wallet_manager").collection("users");
        console.log(await WalletUsers.findOne());
    }
    catch (error) {
        console.warn(error)
    }
    finally {
        await client.close();
    }
}

main().catch(console.warn)