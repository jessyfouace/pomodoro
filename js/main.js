$(function(){
  // Var for number of minut for rest and minut fox exercice
  var numberRest = 0;
  var numberExercice = 0;
  // For time rest +
    $("#morerep").click(function(){
      if (numberRest <= 4) {
        numberRest++;
        $("#repos").val(numberRest);
      }
    });
    // For time rest -
  $("#lessrep").click(function(){
    if (numberRest >= 1) {
      numberRest--;
      $("#repos").val(numberRest);
    }
  });
  // For time exercice +
    $("#moretime").click(function(){
      if (numberExercice <= 24) {
        numberExercice++;
        $("#minutes").val(numberExercice);
        $("#timer").val(numberExercice + ":00");
      }
    });
    // For time exercice -
  $("#lesstime").click(function(){
    if (numberExercice >= 1) {
      numberExercice--;
      $("#minutes").val(numberExercice);
      $("#timer").val(numberExercice + ":00");
    }
  });
  // Timer second
  var sec = 0;
  // Start function
  $("#start").click(function(){
    // Set timer all 1 second (I won't use the timer of js)
    var timer = setInterval(startclick, 1000);
    // Appear or dessappear
    $("#start").addClass("d-none");
    $("#pause").removeClass("d-none");
    $("#restart").removeClass("d-none");
    // Save value of timer at start page
    var savenumberExercice = numberExercice;
    var savenumberRest = numberRest;
    // Function for play
    function startclick(){
      // timer for 0second
      if (sec == 0 && numberExercice > -1) {
        sec = 59;
        numberExercice--;
      }
      // Section for the exercice
      if (numberExercice > -1) {
        $("#info").html("Exercice");
        $("#timer").val(numberExercice + ":" + sec);
        sec--;
        $("#minutes").val("0");
        // Just estetic
        if (sec < 10) {
          $("#timer").val(numberExercice + ":" + "0" + sec);
        }
        // Send value of rest
        if (numberExercice == 0 && sec == 1) {
          numberRest = savenumberRest;
          numberRest--;
          return numberRest;
        }
      }
      // Start rest
      if (numberExercice < 0) {
        if (sec == 0 && numberRest > -1) {
          sec = 59;
          numberRest--;
        }
        $("#info").html("Repos");
        $("#timer").val(numberRest + ":" + sec);
        sec--;
        $("#repos").val("0");
        if (sec < 10) {
          $("#timer").val(numberRest + ":" + "0" + sec);
        }
        if (numberRest == 0 && sec == 1) {
          numberExercice = savenumberExercice;
          return numberExercice;
        }
      }
    }
    // Stop click
    $("#pause").click(function(){
      clearInterval(timer);
      $("#start").removeClass("d-none");
      $("#pause").addClass("d-none");
      $("#restart").addClass("d-none");
    });
    // Restart click
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
