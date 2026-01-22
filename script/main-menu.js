const btnStart = document.getElementById("Start-Game");
const bgStart = document.getElementById("Toggle-bg");
const video = document.getElementById("bgVideo");

const bgMainSound = new Audio("music/Main-Song.mp3")
bgMainSound.loop = true;
bgMainSound.volume = 0.5;

let initSound = false;

const btnSong = document.getElementById("btn-Song");
const songIcon = document.getElementById("Song-Icon");

function toggleAudio(){
    if(!initSound){
        bgMainSound.play().catch(e => console.log("Audio play blocked"));
        initSound = true;
    }

    bgMainSound.muted = !bgMainSound.muted;

    if(bgMainSound.muted){
        btnSong.lastChild.textContent = "MUTED";
        songIcon.className = "bi bi-volume-mute";
    }
    else{
        btnSong.lastChild.textContent = "PLAYING";
        songIcon.className = "bi bi-volume-up";
    }
}

btnSong.addEventListener("click", (e) =>{
    e.stopPropagation();
    toggleAudio();
})

btnStart.addEventListener("click", (e) =>{
    e.preventDefault()
    bgStart.classList.add("Bg-start");
    
    video.play().catch(error => {
        console.log("El video no pudo reproducirse automáticamente:", error);
    });

    setTimeout(()=>{
        window.location.href= "./template/main.html"
    },6000)
})