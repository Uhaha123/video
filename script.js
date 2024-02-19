function myVideo() {
    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    var  stop = document.getElementById('stop');
    video.autoplay = true;
    video.loop= true;
    if (video.paused) { 
        button.innerText = "Pause";
        button.disabled = true;
        button.style.display="none";
        stop.style.display="block";
        video.loop= true;
        video.autoplay = true;
        video.play();
    } 
}
