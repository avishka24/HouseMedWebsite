var path = require("path");
var express = require("express");
var pmModel = require(path.join(
  __dirname,
  "..",
  "models",
  "post-med-model.js"
));
var fileupload = require("express-fileupload");
app.use(fileupload());
app = express.Router();
var postMedModel = pmModel();

async function createPostMed(req, resp) {
  console.log(req.files);

  if (req.files == null) {
    req.body.mpic = "nopic.jpg";
  } else {
    req.body.mpic = req.files.myfile.name;
    var fullPath = path.join(
      __dirname,
      "..",
      "public",
      "uploads",
      req.body.mpic
    );
    //--------------------------------------------
    await req.files.myfile.mv(fullPath, (err) => {
      if (err) {
        console.log(err.msg);
      } else {
        console.log("file moved successfully");
      }
    });
  }

  console.log(JSON.stringify(req.body));
  //--------------------------------------------
  await postMedModel.create(req.body, (err, result) => {
    if (err) {
      resp.send(err);
      return;
    }
    resp.set("json");
    resp.json({ msg: "POST : Record Inserted with Pic." });
    console.log(result);
  });
}

async function fetchMedicine(req, res) {
  console.log(req.body);
  await postMedModel
    .find({ uid: req.body.uid })
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      res.json({ msg: err });
    });
}

async function deleteMedicine(req, res) {
  console.log(req.body.uid);
  console.log(req.body.medname);
  await postMedModel
    .deleteOne({ uid: req.params.uid, medname: req.params.medname })
    .then((result) => {
      console.log(result);
      if (result.deletedCount != 0) res.json({ msg: "Deleted" });
      else res.json({ msg: "invalid medicine name" });
    });
}

async function doFetchCity(req, resp) {
  postMedModel
    .distinct("city")
    .then((result) => {
      console.log(result);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
}

async function doFetchMedicine(req, resp) {
  var cityy = req.params.city;
  postMedModel
    .distinct("medname", { city: cityy })
    .then((result) => {
      console.log(result.length);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
}

async function doFetchProvider(req, resp) {
  console.log(req.params.city);
  console.log(req.params.medname);
  postMedModel
    .find({ city: req.params.city, medname: req.params.medname })
    .then((result) => {
      console.log(result.length);
      resp.json(result);
    })
    .catch((err) => {
      resp.json({ errmsg: err });
    });
}
module.exports = {
  createPostMed,
  fetchMedicine,
  deleteMedicine,
  doFetchMedicine,
  doFetchProvider,
  doFetchCity,
};
