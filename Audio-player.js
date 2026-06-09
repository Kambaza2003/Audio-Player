let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentTimeDisplay = document.getElementById("currentTime");
let remainingTimeDisplay = document.getElementById("remainingTime");

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.onloadedmetadata = function () {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
    remainingTimeDisplay.textContent = formatTime(audio.duration);
}

function playPause() {

    if(audio.paused){

        audio.play();

        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");

    }
    else{

        audio.pause();

        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }

}

audio.ontimeupdate =  function(){
    progress.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    remainingTimeDisplay.textContent = formatTime(audio.duration - audio.currentTime);
}

progress.onchange = function () {
    audio.play();
    audio.currentTime = progress.value;

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}