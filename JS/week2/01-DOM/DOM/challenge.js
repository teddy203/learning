var blackbutton = document.getElementById("blackbutton")
var blackbutton = document.getElementById("brownbutton")

blackButton.addEventListener("click", function(event) {
      document.body.style.backgroundColor = "black";
      event.stopPropagation();
    });

    brownButton.addEventListener("click", function(event) {
      document.body.style.backgroundColor = "brown";
      event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
      if (event.target !== redButton && event.target !== blueButton) {
        document.body.style.backgroundColor = "";

      }});
