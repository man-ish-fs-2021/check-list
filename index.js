const express= require('express');

const ejs = require('ejs');
const db = require('./config/mongoose');

const app = express();
const port = 8001;
app.use(express.urlencoded());
app.use(express.static('./assets'));

//Ejs engine / template setup
app.set('view engine', 'ejs');
app.set('views','./views');
app.use("/",require("./routes"));






app.listen(port, (err)=>{
    if(err){console.log("Error in starting the server",err); return}
    console.log("Server is up and running",port);
});