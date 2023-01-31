require("dotenv").config();

const express = require("express");
const App = express();
const PORT = 8080;

const cors = require("cors");
const FrontendUrl = process.env.FRONTEND_URL;
App.use(cors({
    origin:FrontendUrl.substring(0,FrontendUrl.length-1),
    methods:'GET'
}));

const AppRoute = require("./api/routes");
AppRoute(App);

App.listen(PORT,()=>{console.log(`App listening on port ${PORT}`)});

// Export the Express API
module.exports = App;