const mongoose = require('mongoose');
const {Schema}= require('mongoose')

const UserSchema = new Schema({
     name:{type:String, required:false }, 
     email:{type:String,required:false},
     password: {type:String,required:false},
     age: {type:Number ,required:false},
     role : {type:String,required:false},
     BorrowedBook:[
    {type: mongoose.Schema.types,
        ref:"book",
        required:false,
     }]
 })

 const user = mongoose.model('user',UserSchema)
 module.exports = user