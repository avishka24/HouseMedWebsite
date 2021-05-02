var express = require("express");
var path = require("path");
const session=require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);   //result of session will be stored in mongodb store.
app = express.Router();
//-----------
const db = require("../config/dbConfig");
const mongoDB_uri = db.dburl;
const store = new MongoDBStore({
    uri:mongoDB_uri,
    collection:'sessions'
});
//---------------
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(
    session({secret:'my secret',resave: true,saveUninitialized: true,store:store})
);
var userController = require(path.join(__dirname,"..","controllers","user-controller.js"));

app.post("/sign-up",userController.createUser);
app.post("/log-in",userController.loginUser);
app.post("/logout",userController.logoutUser);

module.exports = app;
//secret ----used for signing the hash which secretly store our idea in the cookie.Forces the session to be saved back to the session store 
//resave:false ----session will not be saved on every request but only if somethings changes.Forces a session that is "uninitialized"  to be saved to the store 