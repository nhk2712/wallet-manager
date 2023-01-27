const UserInfoModel = require("../../models/User/UserInfoModel")

async function UserInfo(userId){
    return await UserInfoModel(userId)
}

module.exports = UserInfo;