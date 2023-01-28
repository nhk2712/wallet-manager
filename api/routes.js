const UserInfo = require("./controllers/User/UserInfo");
const Update = require("./controllers/Wallet/Update");
const SignUpModel = require("./models/User/SignUpModel");
const CheckIfUsernameExist = require("./models/User/CheckIfUsernameExist");
const SignInModel = require("./models/User/SignInModel")

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

    app.route('/user/signup/:username/:hashedPassword/:name/:initialAmount/:unit')
        .get(async function (req, res) {
            const username = req.params.username;
            const hashedPassword = req.params.hashedPassword;
            const name = req.params.name;
            const initialAmount = req.params.initialAmount;
            const unit = req.params.unit;

            res.send(await SignUpModel(username, hashedPassword, name, initialAmount, unit))
        })

    app.route('/user/checkusername/:username')
        .get(async function (req, res) {
            res.send(await CheckIfUsernameExist(req.params.username))
        })

    app.route('/user/signin/:username/:hashedPassword')
        .get(async function (req, res) {
            const username = req.params.username;
            const hashedPassword = req.params.hashedPassword;

            res.send(await SignInModel(username, hashedPassword))
        })
}

module.exports = AppRoute;