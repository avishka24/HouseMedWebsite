var mongoose = require("mongoose");

function getUserProfileModel(){
var userSchemaaObj = new mongoose.Schema({
    uid:String,
    uname:String,
    mobile:String,
    city:String,
    address:String,
    dos:{type:Date,default:Date.now},
    ppic:String,
});

var userProfileModel = mongoose.model("userprofileColl",userSchemaaObj);
return userProfileModel;
}
module.exports = getUserProfileModel;