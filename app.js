$(document).ready(function() {
    $(document).on("click", "#find-movie", function(event) {        
      
        if($("#movie-input").val() != "") {
            event.preventDefault();
            // Here we grab the text from the input box
            var movie = $("#movie-input").val();
            // Here we construct our URL
            var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
            // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
            // and display it in the div with an id of movie-view
            // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE
            $.ajax({
                url : queryURL,
                method : 'GET'
              }
            ).then(function(resp) {
              
              console.log(resp);
              
              //var jsonStr = JSON.stringify(resp);
              //$("#movie-view").append(jsonStr);
              //var title = resp.Title;
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