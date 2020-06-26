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

$song_url = $_GET["song"];
$song_url = str_replace("http", "https", $song_url);
$download_song = new Download($song_url);
$loginForm = new LoginForm();
######################################################
HeaderAndFooter::footer();
