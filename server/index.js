const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path:'./.env'})

app.use(express.json())

require('./database/connection')

app.get('/',(req,res)=>{
    res.json('testing')
})


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})