var canvas = document.getElementById("imageView"),
ctx = canvas.getContext("2d");

canvas.width = 934;
canvas.height = 622;
var background = new Image();
background.src = projects.projects.first_project[240];
background.onload = function(){
    ctx.drawImage(background,0,0);   
}