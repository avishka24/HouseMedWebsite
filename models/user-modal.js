var mongoose = require("mongoose");

function getUserModel(){
    var userSchemaObj = new mongoose.Schema({
        uid:{type:String,index:true,unique:true},
        pwd:String,
        email:String,
        mobile:String,
        dos:{type:Date,default:Date.now},
    })
    
    var userModel = mongoose.model("signupusers",userSchemaObj);
    return userModel;
}
module.exports = getUserModel;