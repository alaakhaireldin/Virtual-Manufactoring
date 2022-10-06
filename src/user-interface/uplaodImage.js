var loadFile = function(event) {
    var image = $('#output')[0];
    image.src = URL.createObjectURL(event.target.files[0]);
  };

