const UserInfo = require("./controllers/User/UserInfo")

function AppRoute(app) {
    app.route('/')
        .get((req, res) => { res.send({ msg: "Hello world!" }) })

    app.route('/user/userinfo/:userId')
        .get(async function (req, res) { res.send(await UserInfo(req.params.userId)) })
}

module.exports = AppRoute;