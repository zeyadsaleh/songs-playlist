$(function () {
    $.ajax({
        url: "https://api.jsonbin.io/b/5eafd4ca47a2266b1472794c"
    }).then(function (data) {
        data.tracks.forEach(function myFunction(item) {
            var playlistName = $("<h4></h4>").text(item.name).addClass("card-title");
            var playlistLength = $("<p></p>").text("Length: " + item.length).addClass("card-text");
            var playlistArtist = $("<p></p>").text("Artist: " + item.artist).addClass("card-text");
            var playlistUrl = $("<a>");
            if (sessionStorage.getItem("login") && sessionStorage.getItem("login") === "successful") {
                playlistUrl.attr("href", item.url);
                playlistUrl.attr("target", "_blank");
                playlistUrl.click(function(){ window.location.href = "/?song=" + item.url });
            } else {
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