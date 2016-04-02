$(function(){
  $.get("http://www.omdbapi.com/?t=Being+There&y=&plot=full&r=json").done(function(response){
    addMovie(response);
  })

  $.get("http://www.omdbapi.com/?t=Harold+and+Maude&y=&plot=full&r=json").done(function(response){
    addMovie(response);
  })

  $.get("http://www.omdbapi.com/?t=When+Harry+Met+Sally&y=&plot=full&r=json").done(function(response){
    addMovie(response);


  $("main, section").fadeIn("slow");

  })



  $("#addMovieSearch").on("submit", function(event){
    event.preventDefault();
    var movieInfo = $("#addMovieSearch").serializeArray();
    var title = movieInfo[0].value;
    var year = movieInfo[1].value;
    console.log(movieInfo);
    // console.log("<a href=https://en.wikipedia.org/wiki/" + title + "></a>");
    $.get("http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=full&r=json").done(function(response){
    addMovie(response);
    });
  });

  $("button").on("click", function(){
    $("main").children("div:last").remove();
  });


  function addMovie(response){
    $("main").append("<div><h3>" + response.Title + "</h3><img src=" + response.Poster + " width=200px height=auto/><p>" + response.Year + "</p><p>" + response.Plot + "</p><div>");
  };

});
