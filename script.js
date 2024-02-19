function myVideo() {
    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    var  stop = document.getElementById('stop');
    
    if (video.paused) { 
        button.innerText = "Pause";
        button.disabled = true;
        button.style.display="block"
        stop.style.display="block";
        video.autoplay = true;
        video.play();
    } 
    else {
        video.pause();
        button.innerText = "Play Again";
    }
}
