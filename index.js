const express = require("express");
const App = express();
const PORT = 8080;

App.get('/',(req,res)=>{res.send("Hello World!")});

App.listen(PORT,()=>{console.log(`App listening on port ${PORT}`)});