const Client = require("../mongodb")

async function UpdateHistory(userId) {
    try {
        await Client.connect();
        const UpdateCollection = await Client.db("wallet_manager").collection("updates");

        var updates = await UpdateCollection.find({ user: userId }).toArray();

        await Client.close();
        return updates;
    }
    catch (err) {
        console.log(err)
        return { msg: "Error", description: err }
    }
}

module.exports = UpdateHistory;