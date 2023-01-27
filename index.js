const express = require("express");
const App = express();
const PORT = 8080;

const AppRoute = require("./api/routes");
AppRoute(App);

App.listen(PORT,()=>{console.log(`App listening on port ${PORT}`)});

// Export the Express API
module.exports = App;