// ==UserScript==
// @name         Mp3 and Smash Custom music
// @version      1.0
// @description  puts the download mp3 button back where it belongs using Tommy's Script
// @author       Jp
// @orginalauthor Tommy Smith, http://3dvia.com/tomy
// @include https://www.smashcustommusic.com*
// @include https://smashcustommusic.com*
// @exclude https://www.smashcustommusic.com/gamelist
// @exclude https://www.smashcustommusic.com/random
// @exclude https://www.smashcustommusic.com/donate
// @exclude https://www.smashcustommusic.com/contact
// @exclude https://www.smashcustommusic.com/game*
// @exclude https://smashcustommusic.com/gamelist
// @exclude https://smashcustommusic.com/random
// @exclude https://smashcustommusic.com/donate
// @exclude https://smashcustommusic.com/contact
// @exclude https://smashcustommusic.com/game*
// ==/UserScript==
document.getElementById("brstmdl").innerHTML += "<br><a href=/play/" + location.pathname.substr(1) + ">Download MP3</a>";