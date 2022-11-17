const express = require('express')
const app = express()
const posts=require('./products')
const product1 = require('./123456789128')

let users=[];

app.get('/products',(req,res)=> {
    res.json(posts)
})
app.get('/123456789128',(req,res)=> {
    res.json(product1)
})

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.listen(process.env.PORT || 3000,()=>console.log("Server is running"))