const Client = require("../mongodb")

async function UserInfoModel(userId){
    var user;
    try{
        await Client.connect();

        const UserCollection = await Client.db("wallet_manager").collection("users");
        user = await UserCollection.findOne({_id:userId})
    }
    catch(err){
        console.error(err)
        return {msg:"Error",description:err}
    }
    finally{
        await Client.close();
        return user;
    }
}

module.exports = UserInfoModel;