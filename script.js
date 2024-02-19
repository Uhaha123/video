function myVideo() {
    document.getElementById('myVideo').load();
    
    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    var stop = document.getElementById('stop');
    
    video.autoplay = false;
    
    if (video.paused || video.ended) {
        video.play();
        button.innerText = "Pause";
        button.disabled = true;
        stop.style.display="block";
        video.loop = true;
    } else {
        video.pause();
        button.innerText = "Play Again";
    }
}
