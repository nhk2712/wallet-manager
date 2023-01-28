const Client = require("../mongodb")

async function SignInModel(username,hashedPassword){
    try{
        await Client.connect();
        const UserCollection = await Client.db("wallet_manager").collection("users");

        const user = await UserCollection.findOne({username:username});

        await Client.close();
        if (user) {
            if (hashedPassword===user.hashedPassword) return user;
            else return {msg:"Error",description:"Wrong password"}
        }
        else return {msg:"Error",description:"Username not found"}
    }
    catch(err){
        console.error(err)
        return {msg:"Error",description:err}
    }
}

module.exports = SignInModel;