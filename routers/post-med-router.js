var express = require("express");
var path = require("path");

app = express.Router();
app.use(express.urlencoded({ extended: true }));
var postMedController = require(path.join(
  __dirname,
  "..",
  "controllers",
  "post-med-controller.js"
));

app.post("/save-medicine", postMedController.createPostMed);
module.exports = app;

app.post("/delete-medicine/:uid/:medname", postMedController.deleteMedicine);
app.post("/fetchMed", postMedController.fetchMedicine);
app.post("/fetch-all", postMedController.doFetchCity);
app.post("/fetch-medicine/:city", postMedController.doFetchMedicine);
app.post("/fetch-provider/:city/:medname", postMedController.doFetchProvider);
