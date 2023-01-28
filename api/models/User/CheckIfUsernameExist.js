const Client = require("../mongodb");

async function CheckIfUsernameExist(username){
    try{
        await Client.connect()
        const UserCollection = Client.db("wallet_manager").collection("users")
        const result = await UserCollection.count({username:username})
        await Client.close()

        if (result) return {result:"Exist"}
        else return {result:"Okay"}
    }
    catch(err){
        console.error(err);
        return {msg:"Error",description:err}
    }
}

module.exports = CheckIfUsernameExist;