var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var app = express();
const db = require("./config/dbConfig");
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// app.use(bodyParser.json())
mongoose.set("useCreateIndex", true);

const PORT = process.env.port || 7000;

var dbConfig = db.dburl;
mongoose
  .connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "testapp", "build")));
  app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "testapp", "build", "index.html"));
  });
}

var signupRouter = require("./routers/signup-router");
app.use("/react", signupRouter);

var profileRouter = require("./routers/user-profile-router");
app.use("/react/profile", profileRouter);

var postMedRouter = require("./routers/post-med-router");
app.use("/react/profile/medicine", postMedRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} http://localhost:${PORT}`);
});
