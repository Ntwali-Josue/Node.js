const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    _id :  mongoose.Schema.Types.ObjectId,
    username : {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)