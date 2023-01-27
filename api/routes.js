const UserInfo = require("./controllers/User/UserInfo")

function AppRoute(app) {
    app.route('/')
        .get((req, res) => { res.send({ msg: process.env.MDB_USERNAME }) })

    app.route('/user/userinfo/:userId')
        .get(async function (req, res) { res.send(await UserInfo(req.params.userId)) })
}

module.exports = AppRoute;