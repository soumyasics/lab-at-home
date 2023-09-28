const express=require('express')
const bodyParser=require('body-parser')
const db=require('./DBConnection')
const app=express()
const cors=require('cors')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
const route=require('./routes')
app.use('/lab_at_home_api',route)

app.listen(4011,()=>{
    console.log("Server created successfully");
})