const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./routes/url');
const connect=require('./connection');

connect();
app.use(bodyParser.json());
app.use("/",router)


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})