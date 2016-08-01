/**
 * Created by apple on 7/29/16.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
//defined model
const userSchema = new Schema({
    email:{type: String ,unique:true,lowercase:true},
    password:String
})

//保存前加密密码
userSchema.pre('save',function(next){
    //user model
    const user = this
    //生成slat
    bcrypt.genSalt(10,function(err,salt){
        if(err) return next(err)
        //加密密码
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err) return next(err)
            //加密密码覆盖
            user.password=hash;
            next()
        })
    })
})
//create the modal class
const ModelClass= mongoose.model('user',userSchema)

//export the model

module.exports = ModelClass