const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./routes/url');
const connect=require('./connection');
const staticroute=require('./routes/staticroute');
require('dotenv').config();
let ejs = require('ejs');
const port = process.env.PORT || 3000; 

connect();
app.set('view engine', 'ejs');
app.set("views",__dirname+"/views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",staticroute);
app.use("/url",router)


app.listen(port,()=>{
    console.log('Server is running on port 3000');
})