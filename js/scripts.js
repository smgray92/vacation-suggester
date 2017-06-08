$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
  $("#cancun").hide();
  $("#tokyo").hide();
  $("#alaska").hide();
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    var cancunPoints = 0;
    var tokyoPoints = 0;
    var alaskaPoints = 0;

    if (question1 === "calm") {
      cancunPoints += 1;
    }
    else if (question1 ==="active") {
      tokyoPoints += 1;
    }
    else  if (question1 === "adventurous") {
      alaskaPoints += 1;
    }

    if (question2 === "Go to the beach and relax") {
      cancunPoints += 1;
    }
    else if (question2 ==="Enjoy ciy life and visit stores") {
      tokyoPoints += 1;
    }
    else if (question2 ==="Appreciate wildlife") {
      alaskaPoints += 1;
    }

    if (question3 === "Warm and Sunny") {
      cancunPoints += 1;
    }
    else if (question3 === "Not too cold, Not too warm") {
      tokyoPoints += 1;
    }
    else if (question3 === "Cold and Snowy") {
      alaskaPoints += 1;
    }
    if (question4 === "Mexican or Caribbean Cuisine") {
      cancunPoints += 1;
    }
    else if (question4 ==="Asian Cuisine") {
      tokyoPoints += 1;
    }
    else if (question4 ==="Seafood") {
      alaskaPoints += 1;
    }

    if (question5 === "beach") {
      cancunPoints += 1;
    }
    else if (question5 === "urban") {
      tokyoPoints += 1;
    }
    else if (question5 === "rural") {
      alaskaPoints += 1;
    }
    if (cancunPoints > tokyoPoints || cancunPoints > alaskaPoints) {
      $("#cancun").show();
    }
    else if (tokyoPoints > cancunPoints || tokyoPoints > alaskaPoints) {
      $("#tokyo").show();
    }
    else if (alaskaPoints > cancunPoints || alaskaPoints > tokyoPoints) {
      $("#alaska").show();
    }
    else {
      alert("All points even");
    }
  });
});
