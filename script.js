function myVideo() {
    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    var  stop = document.getElementById('stop');
    
    if (video.paused) { 
        button.innerText = "Pause";
        button.disabled = true;
        stop.style.display="block";
        video.loop= true;
        video.autoplay = true;
        video.play();
    } 
}
