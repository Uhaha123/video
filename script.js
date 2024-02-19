function myVideo() {
    document.getElementById('myVideo').load();
    
    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    
    if (video.paused || video.ended) {
        video.play();
        button.innerText = "Pause";
        button.disabled = true;
        document.getElementById('stop').style.display="block";
        video.loop = true;
    } else {
        video.pause();
        button.innerText = "Play Again";
    }
}
