const Project = require("../models/project");

const express = require("express"),
  projects = [];

const router = express.Router();

router.get("/list-projects", (req, res) => {
  res.render("list-projects.ejs", { newListItem: projects });
});

router.get("/add-project", (req, res) => {
  res.render("add-project.ejs");
});

router.post("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

router.post("/list-projects", (req, res) => {
  // const id = Math.random().toString();
  const projectTitle = req.body.Ptitle;
  const image = req.body.img;
  const logData = req.body.data;
  const unit = req.body.Unit;
  const project = new Project({
    projectTitle: projectTitle,
    imageURL: image,
    logDataURL: logData,
    unit: unit,
  });
  project.save().then((result) => console.log("Created Project"));
  // projects.push(projectTitle);
  res.redirect("/list-projects");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});
module.exports = router;
