// CUSTOM SCRIPTS FOR jukeBox Assignment

// Data just hangin' out.

var audioSong;
var option;
var playTime = 0;

// Array of songs that will be played.

const songOptions = ["All We Can Do", "Sparks", "Here I Dreamt I was an Architect", "So Long, Lonesome"];
var i = 0;

// Grabbin' buttons to ignite functionality

var audioPlayer = document.getElementById("audioplayer");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// Function to allow songs to play.

play.addEventListener("click", function() {
	var option = document.getElementById("option").value;
	console.log("Play Button Clicked.");
	audioPlayer.src = option + ".mp3";
	playTime;
	console.log(playTime);
	audioPlayer.playTime = playTime;
	audioPlayer.play();

});

// Function to pause songs.

pause.addEventListener("click", function() {
	console.log("Pause Button Clicked.");
	playTime = audioPlayer.playTime;
	audioPlayer.pause();

});

// Adding functionality when clicking the stop button.

stop.addEventListener("click", function() { 
	console.log("Stop Button Clicked.");
	playTime = 0;
	audioPlayer.load();

});

// Adding functionality when clicking the previous button.

prev.addEventListener("click", function() { 
	console.log("Previous Button Clicked.");
	prevSong();

});

// Adding functionality when clicking the next button.

next.addEventListener("click", function() { 
	console.log("Next Button Clicked.");
	nextSong();

});

function playSong() {
			audioPlayer.src = songOptions[i] + ".mp3";
			audioPlayer.play();
			setInterval(endOfTheSong, 1000);
};

function nextSong(){
	i = (i+1)%songOptions.length;
	playSong();

};

function prevSong(){
	i = (i-1)%songOptions.length;
	if(i == -1){
		i = songOptions.length - 1;
	}
	console.log(i);
	plong();

};

function endOfTheSong(){
			if(audioPlayer.ended == true){
				console.log("Song Ended");
				i++;
				if(i == option.length){
					audioPlayer.load();
					i=0;
				}
				playSong();
			}
};

var shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", function() {
	console.log("Hey, I'm shuffling. Check me out.")

	var currentIndex = songOptions.length, 
					   randomIndex, 
					   temporaryValue;

	while (0 !== currentIndex) {

	randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = songOptions[currentIndex];
   	songOptions[currentIndex] = songOptions[randomIndex];
    songOptions[randomIndex] = temporaryValue;
  
  }

  	playSong();
  	
});
