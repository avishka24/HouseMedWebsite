var express = require("express");
var path = require("path");

app = express.Router();
app.use(express.urlencoded({extended:true}));

var userProfileController = require(path.join(__dirname,"..","controllers","user-profile-controller.js"));
app.post("/save-profile",userProfileController.createUserProfile)
app.post("/update-profile",userProfileController.updateProfile)
app.post("/fetch-details",userProfileController.fetchDetails)

module.exports = app;