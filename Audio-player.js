let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let ctrlIcon = document.getElementById("ctrlIcon");

audio.onloadedmetadata = function () {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
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

audio.ontimeupdate = function(){
    progress.value = audio.currentTime;
}

progress.onchange = function () {
    audio.play();
    audio.currentTime = progress.value;

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}