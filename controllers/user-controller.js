var path = require("path");
var uModel =require(path.join(__dirname,"..","models","user-modal.js"));

var userModel = uModel();

async function createUser(req,res){
    await userModel.create(req.body,(err,result)=>{
        if(err){
        res.send(err);
        return;
        }
        else if(req.body.uid == "" || req.body.pwd =="" || req.body.mobile == "" || req.body.email == ""){
            res.send("fill all data");
        }
        else{
            res.set("json")
            res.send({msg:"POST :Signed up! :)"});
            console.log(result);
        }
    })
}

async function loginUser(req,res){
    var uid = req.body.uid;
    await userModel.findOne({uid:uid},(err,foundUser)=>{
        if(err) 
        console.log(err);
        else{
            if(foundUser){
                if(foundUser.pwd == req.body.pwd){
                    console.log("logged in");
                    req.session.isLoggedIn = true;
                    req.session.user = uid;
                    res.send("You are succesfully Logged in");
                    // res.redirect("/src/Components/UserDashboard.jsx");
                }
                else{
                    res.send("invalid userid");
                    console.log("invalid");
                }
            }
            else{
                res.send("invalid user");
                res.redirect("/");
            }
        }
    })

}
async function logoutUser(req,res){
//   req.session.destroy((err)=>{
//      console.log(err);
     res.redirect("/");
//  });
}

module.exports = {createUser,loginUser,logoutUser}