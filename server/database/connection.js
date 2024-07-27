const mongoose = require('mongoose')

const DB = process.env.DATABASE_URL

mongoose.connect(DB,{
    dbName: 'eventApp'
})
.then(()=>{
    console.log('connection successful');
})
.catch((err)=>{
    console.log(err);
})