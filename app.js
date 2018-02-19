$(document).ready(function() {
    $(document).on("click", "#find-movie", function(event) {
        // Here we grab the text from the input box   
        var movie = $("#movie-input").val();
        if(movie != "") {
            event.preventDefault();
            // Here we construct our URL
            var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
            
            $.ajax({
                url : queryURL,
                method : 'GET'
              }
            ).then(function(resp) {              
              console.log(resp);
              addMovie(resp);
              $("#movie-input").val(""); // clear the text in search box
            })
            .catch(function(err){
              console.error(err)
            })

            function addMovie(resp){      
                var title = $("<h2><strong>" + resp.Title + "</strong></h2>");
                var year = $("<div><strong>Year: " + resp.Year + "</strong></h2>");
                var rated = $("<div><strong>Rated: " + resp.Rated + "</strong></h2>");                
                var poster = $("<img>").attr("src", resp.Poster);      
                var plot = $("<p>" + resp.Plot + "</p>");      
                var button = $("<button class='btn btn-primary btn-lg button-movie'>" + resp.Title + "</button>");
                var divider = $("<hr class='my-4' />");
                $("#movie-view").append(title, year, rated, poster, plot, divider);
                $(".moviebutton").append(button);
              }
        }
    });
})