function myVideo() {
    

    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
 
    if (video.paused) { 
        button.innerText = "Pause";
        button.disabled = true;
        document.getElementById('btn').style.display="none";
        document.getElementById('stop').style.display="block";
        video.loop= true;
        video.autoplay = true;
        video.play();
    } 
}
