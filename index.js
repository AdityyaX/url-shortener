const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./routes/url');
const connect=require('./connection');
require('dotenv').config();
const port = process.env.PORT || 3000; 

connect();
app.use(bodyParser.json());
app.use("/",router)


app.listen(port,()=>{
    console.log('Server is running on port 3000');
})