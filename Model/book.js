const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const BookSchema = new Schema
({
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:{type:Number},
    genre:{type:String},
    summary:{type:String}
    })

const book= mongoose.model('book',BookSchema)
module.exports = book