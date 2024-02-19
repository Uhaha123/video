function myVideo() {
    document.getElementById('myVideo').load();


    var video = document.getElementById('myVideo');
    var button = document.getElementById('btn');
    
    if (video.paused) {
        video.play();
        button.innerText = "Pause";
        button.disabled = true;
        document.getElementById('btn').style.display="none";
        document.getElementById('stop').style.display="block";
    } 
    else {
        video.pause();
        button.innerText = "Play Again";
    }

    var video = document.getElementById('myVideo');
    video.volume = 200;
}
