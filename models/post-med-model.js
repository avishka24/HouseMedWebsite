var mongoose = require("mongoose");

function getPostMed(){
var userSchemaaObj = new mongoose.Schema({
    uid:String,
    medname:String,
    company:String,
    city:String,
    expdate:String,
    dos:{type:Date,default:Date.now},
    quantity:String,
    units:String,
    mpic:String,
});

var postMed = mongoose.model("postMedColl",userSchemaaObj);
return postMed;
}
module.exports = getPostMed;