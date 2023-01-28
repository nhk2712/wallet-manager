const Client = require("../mongodb");

async function SignUpModel(username, hashedPassword, name, initialAmount, unit) {
    try {
        await Client.connect();
        const UserCollection = await Client.db("wallet_manager").collection("users");

        async function genUserId() {
            var userId = (Math.round(Math.random() * 900000) + 100000).toString();
            var checkIfIdExist = await UserCollection.count({ _id: userId });
            if (checkIfIdExist) genUserId();
            return userId;
        }

        const newUser = {
            _id: await genUserId(),
            name: name,
            username: username,
            hashedPassword: hashedPassword,
            amount: parseInt(initialAmount, 10),
            unit: unit
        }

        await UserCollection.insertOne(newUser);
        await Client.close();

        return {msg:"Success",description:"Signed up successfully"}
    }
    catch (err) {
        console.error(err);
        return { msg: "Error", description: err }
    }
}

module.exports = SignUpModel;