const Client = require("../mongodb")

async function UpdateModel(userId, type, deltaAmount, title, description) {
    try {
        await Client.connect();

        const UserCollection = await Client.db("wallet_manager").collection("users");
        var UserDocument = await UserCollection.findOne({ _id: userId });
        var amount = UserDocument.amount;
        const deltaAmountNum = parseInt(deltaAmount, 10);

        if (type === "add") amount += deltaAmountNum;
        else if (type === "omit") {
            if (amount >= deltaAmountNum) amount -= deltaAmountNum;
            else {
                await Client.close();
                return { msg: "Error", description: "Money not enough" }
            };
        }

        UserDocument.amount = amount;
        await UserCollection.findOneAndReplace({ _id: userId }, UserDocument)

        const UpdateCollection = await Client.db("wallet_manager").collection("updates");

        async function genUpdateId() {
            var updateId = (Math.round(Math.random() * 90000000) + 10000000).toString();
            var checkIfIdExist = await UserCollection.count({ _id: updateId });
            if (checkIfIdExist) genUpdateId();
            return updateId;
        }

        const updateId = await genUpdateId();
        await UpdateCollection.insertOne({ _id: updateId, user: userId, type: type, deltaAmount: deltaAmountNum, title: title, description: description });

        await Client.close();
        return { msg: "Success", description: "Updated successfully" }
    }
    catch (err) {
        console.error(err)
        return { msg: "Error", description: err }
    }
}

module.exports = UpdateModel;