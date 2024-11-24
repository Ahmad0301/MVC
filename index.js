const express= require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./Routers/index')
const bookrouter = require('./Routers/bookrouter')

mongoose.connect('mongodb://localhost:27017/')
.then(()=>console.log('mongodb is connected'))

app.use(express.json())
app.use("/user",userRouter)
app.use("/book",bookrouter)



app.listen(3000,()=>{
    console.log('server is on port')
})