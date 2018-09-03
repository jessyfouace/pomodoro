$(function(){
  var i = 0;
  var y = 0;
    $("#morerep").click(function(){
      if (i <= 4) {
        i++;
        $("#repos").val(i);
      }
    });
  $("#lessrep").click(function(){
    if (i >= 1) {
      i--;
      $("#repos").val(i);
    }
  });
    $("#moretime").click(function(){
      if (y <= 24) {
        y++;
        $("#minutes").val(y);
        $("#timer").val(y + ":00");
      }
    });
  $("#lesstime").click(function(){
    if (y >= 1) {
      y--;
      $("#minutes").val(y);
      $("#timer").val(y + ":00");
    }
  });
  var sec = 0;
  $("#start").click(function(){
    var timer = setInterval(startclick, 1000);
    $("#start").addClass("d-none");
    $("#pause").removeClass("d-none");
    $("#restart").removeClass("d-none");
    var savey = y;
    var savei = i;
    function startclick(){
      if (sec == 0 && y > -1) {
        sec = 59;
        y--;
      }
      if (y > -1) {
        $("#info").html("Exercice");
        $("#timer").val(y + ":" + sec);
        sec--;
        $("#minutes").val("0");
        if (sec < 10) {
          $("#timer").val(y + ":" + "0" + sec);
        }
        if (y == 0 && sec == 1) {
          i = savei;
          i--;
          return i;
        }
      }
      if (y < 0) {
        if (sec == 0 && i > -1) {
          sec = 59;
          i--;
        }
        $("#info").html("Repos");
        $("#timer").val(i + ":" + sec);
        sec--;
        $("#repos").val("0");
        if (sec < 10) {
          $("#timer").val(i + ":" + "0" + sec);
        }
        if (i == 0 && sec == 1) {
          y = savey;
          return y;
        }
      }
    }
    $("#pause").click(function(){
      clearInterval(timer);
      $("#start").removeClass("d-none");
      $("#pause").addClass("d-none");
      $("#restart").addClass("d-none");
    });
    $("#restart").click(function(){
      clearInterval(timer);
      sec = 0;
      $("#repos").val("0");
      $("#timer").val("RESET");
      $("#start").removeClass("d-none");
      $("#pause").addClass("d-none");
      $("#restart").addClass("d-none");
    });
  });
});
