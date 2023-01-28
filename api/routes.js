const UserInfo = require("./controllers/User/UserInfo");
const Update = require("./controllers/Wallet/Update");

function AppRoute(app) {
    app.route('/')
        .get((req, res) => { res.send({ msg: "Hello world!" }) })

    app.route('/user/userinfo/:userId')
        .get(async function (req, res) { res.send(await UserInfo(req.params.userId)) })

    app.route('/wallet/update/:userId/:type/:deltaAmount/:title/:description')
        .get(async function (req, res) {
            const userId = req.params.userId;
            const type = req.params.type;
            const deltaAmount = req.params.deltaAmount;
            const title = req.params.title;
            const description = req.params.description;

            res.send(await Update(userId, type, deltaAmount, title, description))
        })
}

module.exports = AppRoute;