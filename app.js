$(function(){
  $.get("http://www.omdbapi.com/?t=Being+There&y=&plot=full&r=json").done(function(response){
    addMovie(response);
  })

  $.get("http://www.omdbapi.com/?t=Harold+and+Maude&y=&plot=full&r=json").done(function(response){
    addMovie(response);
  })

  $.get("http://www.omdbapi.com/?t=Annie+Hall&y=&plot=full&r=json").done(function(response){
    addMovie(response);

  $("main, section").fadeIn("slow");

  })



  $("#addMovieSearch").on("submit", function(event){
    event.preventDefault();
    var movieInfo = $("#addMovieSearch").serializeArray();
    var title = movieInfo[0].value;
    var year = movieInfo[1].value;
    $.get("http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=full&r=json").done(function(response){
    addMovie(response);
    console.log(response);
    });
    $("div").fadeIn();
  });

  $("button").on("click", function(){
    $("main").children("div:last").remove();
  });


  function addMovie(response){
    $("main").append("<div><h3>" + response.Title + "</h3><img src=" + response.Poster +
    " width=200px height=auto/><div class=\"stats\">" + response.Year +
    "<br>Director: " + response.Director + "<br>Starring: " + response.Actors +
    "</div><p>" + response.Plot + "</p><p><a href=\"http://www.imdb.com/title/" +
    response.imdbID + "/\" target=\"_blank\">IMDB Entry</a></p></div>");
  };


  function addMovie(response){
    $("main").append("<div><h3>" + response.Title + "</h3><img src=" + response.Poster +
    " width=200px height=auto/><div class=\"stats\">" + response.Year +
    "<br>Director: " + response.Director + "<br>Starring: " + response.Actors +
    "</div><p>" + response.Plot + "</p><p><a href=\"http://www.imdb.com/title/" +
    response.imdbID + "/\" target=\"_blank\">IMDB Entry</a></p></div>");
  };
});
