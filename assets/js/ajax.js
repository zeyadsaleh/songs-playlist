$(function () {
    $.ajax({
        url: "https://api.jsonbin.io/b/5eafd4ca47a2266b1472794c"
    }).then(function (data) {
        data.tracks.forEach(function myFunction(item) {
            var playlistName = $("<h4></h4>").text(item.name).addClass("card-title");
            var playlistLength = $("<p></p>").text("Length: " + item.length).addClass("card-text");
            var playlistArtist = $("<p></p>").text("Artist: " + item.artist).addClass("card-text");
            var playlistUrl = $("<a>");
            if (sessionStorage.getItem("login") && sessionStorage.getItem("login") === "successful") { //if logged in successfully
                playlistUrl.attr("href", item.url);
                playlistUrl.attr("target", "_blank");
                //go to the song's url to consume it with php super global array $_GET
                playlistUrl.click(function(){ window.location.href = "/?song=" + item.url });
            } else { // if not logged in -> go to login modal
                playlistUrl.attr("href", "#myModal");
                playlistUrl.attr("data-toggle", "modal");
            }
            playlistUrl.attr("title", "Download the song");
            playlistUrl.text("Download");
            playlistUrl.addClass("btn btn-danger");
            var line = $("<hr>");
            $(".card-body").append(playlistName, playlistLength, playlistArtist, playlistUrl, line);
        });
    });
});