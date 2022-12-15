const mongoose = require("mongoose");
const express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser"),
  multer = require("multer"),
  projects = [],
  userInterfaceRoutes = require("./routes/user-interface"),
  loginRoutes = require("./routes/login");
mongoose.set("strictQuery", true);
require("dotenv").config();

// Set-up MongoDB
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"));

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//set the port
app.set("port", 3000);

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

//tell express that we want to use the public folder
//for our static assets
app.use(express.static(path.join(__dirname, "public")));
app.use(userInterfaceRoutes);
app.use(loginRoutes);
app.use((req, res, next) => {
  res.render("error404.ejs");
});
// Listen for requests
var server = app.listen(app.get("port"), function () {
  console.log("The server is running on http://localhost:" + app.get("port"));
});
