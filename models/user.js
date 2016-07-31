/**
 * Created by apple on 7/29/16.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//defined model
const userSchema = new Schema({
    email:{type: String ,unique:true,lowercase:true},
    password:String
})

//create the modal class
const ModelClass= mongoose.model('user',userSchema)

//export the model

module.exports = ModelClass