const express= require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/')
.then(()=>console.log('mpngodb is connected'))



app.listen(3000,()=>{
    console.log('server is on port')
})