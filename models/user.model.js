const mongoose = require("mongoose");

/**
 * name
 * userId
 * password
 * email
 * usertype
 */
const userSchema = new mongoose.Schema({

    name: {
        type : String,
        required : true,
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password :  {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minlength : 10,
        unique : true
    },
    usertype : {
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }
},{timestamps:true,versionKey:false})


module.exports = mongoose.model("User", userSchema) //will create a collection named Users