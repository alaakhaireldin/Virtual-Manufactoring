var projects = {
    projects: {
      first_project: {
        240: 'https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg',
  },
      second_projectt: {
        241: 'https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg',
  }
    },
  }
  var html = "";
  $.each(projects, function(id, value) {
      $.each(value, function(projectName, details) {
          $.each(details, function(ProjectID, link) {
              html += '<button type="button" class="collapsible" id="' + ProjectID +
               '"><a href="'+link+'">'+
               projectName+' </a></button><div class="content"><div id="container"><canvas id="imageView" class="canvasImages" width="100" height="75"></canvas></div></div><br></br>'
          });
      });
  });
  console.log(html);
  $(".addToList").html(html);