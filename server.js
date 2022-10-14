const express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser"),
  multer = require("multer"),
  projects = [];

//set the port
app.set("port", 3000);

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

//tell express that we want to use the public folder
//for our static assets
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/list-projects", (req, res) => {
  res.render("list-projects.ejs", { newListItem: projects });
});

app.get("/add-project", (req, res) => {
  res.render("add-project.ejs");
});

app.post("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.post("/list-projects", (req, res) => {
  const projectTitle = req.body.Ptitle;
  const image = req.body.img;
  const logData = req.body.data;
  const unit = req.body.Unit;
  projects.push(projectTitle);
  res.redirect("/list-projects");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

// Listen for requests
var server = app.listen(app.get("port"), function () {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
