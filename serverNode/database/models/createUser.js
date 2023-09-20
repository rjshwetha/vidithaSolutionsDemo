const mongoose = require('mongoose');

const createUserSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        minlength: 4
    },
    email:{
        type:String,
        require:true,
        minlength:10
    },
    phonenumber:{
        type:Number,
        require:true,
        minlength:10,
        maxlength:10
    }
})

const createUser =  mongoose.model('createUser',createUserSchema);

module.exports =  createUser;