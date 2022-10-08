var express = require('express'),
  path = require('path'),
  app = express();

//set the port
app.set('port', 3000);

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(path.join(__dirname, 'public')));

app.post("/", (req, res)=>{
  console.log(__dirname)
  res.sendFile(__dirname +'/public/dashboard.html')
})

app.get("/", (req, res)=>{
  console.log(__dirname)
  res.sendFile(__dirname +'/public/list-projects.html')
})

app.get("/", (req, res)=>{
  console.log(__dirname)
  res.sendFile(__dirname +'/public/add-project.html')
})

app.get("/", (req, res)=>{
  console.log(__dirname)
  res.sendFile(__dirname +'/public/index.html')
})

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
