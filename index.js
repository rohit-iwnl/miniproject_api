const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const posts=require('./posts')
const signin=require('./signup')

let users=[];

app.get('/posts',(req,res)=> {
    res.json(posts)
})
app.post('/signup',(req,res)=> {
    const user=req.body;
    users.push(user)
})

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.listen(process.env.PORT || 3000,()=>console.log("Server is running"))