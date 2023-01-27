function AppRoute(app){
    app.route('/')
    .get((req,res)=>{res.send({msg:"Hello world!"})})
}

module.exports = AppRoute;