<?php
include('autoload.php');

HeaderAndFooter::header();
###################the body code ####################
echo ' 
    <div class="card">
        <div class="card-body">

        </div>
    </div>
 ';

//for login modal 
$loginForm = new LoginForm();
//get the song's url
$song_url = $_GET["song"];
//replace the http with https to start downloading it right
$song_url = str_replace("http", "https", $song_url);
//download the song
$download_song = new Download($song_url);
######################################################
HeaderAndFooter::footer();
