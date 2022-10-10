const express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser"),
  multer = require("multer");

//set the port
app.set("port", 3000);
app.use(bodyParser.urlencoded({ extended: true }));

//tell express that we want to use the public folder
//for our static assets
app.use(express.static(path.join(__dirname, "public")));

// const upload = multer({ dest: "uploads/" });
// const multiUpload = upload.fields([
//   { name: "img", maxCount: 1 },
//   { name: "data", maxCount: 1 },
// ]);

app.post("/", multiUpload, (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
  const projectTitle = req.body.Ptitle;
  const image = req.body.img;
  const logData = req.body.data;
  const unit = req.body.Unit;
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/list-projects.html");
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/add-project.html");
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

// Listen for requests
var server = app.listen(app.get("port"), function () {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
