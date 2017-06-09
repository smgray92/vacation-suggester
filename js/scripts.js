$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    $("#cancun").hide();
    $("#tokyo").hide();
    $("#alaska").hide();
    var name = $("input#name").val();
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
    else if (question1 === "active") {
      tokyoPoints += 1;
    }
    else {
      alaskaPoints += 1;
    }

    if (question2 === "(a) Go to the beach and relax") {
      cancunPoints += 1;
    }
    else if (question2 === "(b) Enjoy city life and visit stores") {
      tokyoPoints += 1;
    }
    else {
      alaskaPoints += 1;
    }

    if (question3 === "(a) Warm and Sunny") {
      cancunPoints += 1;
    }
    else if (question3 === "(b) Not too cold, Not too warm") {
      tokyoPoints += 1;
    }
    else {
      alaskaPoints += 1;
    }
    if (question4 === "(a) Mexican or Caribbean Cuisine") {
      cancunPoints += 1;
    }
    else if (question4 === "(b) Asian Cuisine") {
      tokyoPoints += 1;
    }
    else {
      alaskaPoints += 1;
    }

    if (question5 === "beach") {
      cancunPoints += 1;
    }
    else if (question5 === "urban") {
      tokyoPoints += 1;
    }
    else {
      alaskaPoints += 1;
    }

    if (cancunPoints > tokyoPoints && cancunPoints > alaskaPoints) {
      $("#cancun").show();
    }
    else if (tokyoPoints > cancunPoints && tokyoPoints > alaskaPoints) {
      $("#tokyo").show();
    }
    else if (alaskaPoints > cancunPoints && alaskaPoints > tokyoPoints) {
      $("#alaska").show();
    }
    else {
      $("#notSure").show();
    }
    $(".name").text(name);
    $(".cancun").text(cancunPoints);
    $(".tokyo").text(tokyoPoints);
    $(".alaska").text(alaskaPoints);
  });
});
