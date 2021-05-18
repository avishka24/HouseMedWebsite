var path = require("path");
var upModel =require(path.join(__dirname,"..","models","user-profile-model.js"));
var fileupload=require("express-fileupload");
// app = express.Router();
app.use(fileupload());

var userProfileModel = upModel();

async function createUserProfile(req,resp){
console.log(JSON.stringify(req.body));
console.log("**********");
console.log(req.files);
console.log("**********");
if(req.files==null){
req.body.ppic = "nopic.jpg";
//return res.status(400).json({msg : 'No file uploaded'})
}
else{
req.body.ppic = req.files.myfile.name;
var fullPath = path.join(__dirname,"..","public","uploads",req.body.ppic);
await req.files.myfile.mv(fullPath,(err)=>{
if(err){console.log(err.msg);}
else{ console.log("file moved successfully");}
            })
}
console.log(JSON.stringify(req.body));
await userProfileModel.create(req.body,(err,result)=>{
            if(err)
            {
                resp.send(err);
                return;
            }
            resp.set("json");
            resp.json({"msg":"POST : Record Inserted with Pic."});
            console.log(result);
        });
}

async function updateProfile(req,res){
await userProfileModel.updateOne({uid:req.body.uid},{$set:{uname:req.body.uname,mobile:req.body.mobile,city:req.body.city,address:req.body.address}}).then((result)=>{
        console.log(result);
        res.send(result);
    })
}

async function fetchDetails(req,resp){
    userProfileModel.find({uid:req.body.uid})
    .then((result)=>{
        console.log(result.length);
        resp.json(result);
    })
    .catch((err)=>{
        resp.json({errmsg:err});
    })
}

module.exports = {createUserProfile,updateProfile,fetchDetails};