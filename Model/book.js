const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const BookSchema = new Schema
({
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:Number,
    genre:String,
    summary:String
    })

const book= mongoose.model('book',BookSchema)
module.exports = book