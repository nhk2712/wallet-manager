const express = require("express");
const App = express();

const AppRoute = require("./routes");
AppRoute(App);

module.exports = App;