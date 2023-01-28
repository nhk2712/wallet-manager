const UpdateModel = require("../../models/Wallet/UpdateModel");

async function Update(userId, type, deltaAmount, title, description) {
    return await UpdateModel(userId, type, deltaAmount, title, description)
}

module.exports = Update;