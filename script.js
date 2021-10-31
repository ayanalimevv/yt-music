var lyrics = document.getElementsByClassName("queue-head-2")[0];
var playlist = document.getElementsByClassName("queue-head-1")[0];
var playlistDiv=document.getElementsByClassName("main-queue-playlist")[0];
var li = document.querySelectorAll("li");
let mainimg = document
  .getElementsByClassName("main-info")[0]
  .getElementsByTagName("img")[0];
let playbackimg = document
  .getElementsByClassName("left-playback")[0]
  .getElementsByTagName("img")[0];
let activeEl;
let volUp = document.getElementsByClassName("vol-up")[0];
let voldown = document.getElementsByClassName("vol-down")[0];
let play = document.getElementsByClassName("play")[0];
let pause = document.getElementsByClassName("pause")[0];
let back = document.getElementsByClassName("back")[0];
let next = document.getElementsByClassName("next")[0];
var activesong;
var a=new Audio('a.mp3');;
li.forEach((element) => {
  element.addEventListener("click", () => {
    li.forEach((e) => {
      if (e.classList.contains("active-song")) {
        e.classList.remove("active-song");
      }
    });
    play.classList.add("d-none");
    pause.classList.add("d-inline");
    let index=element.id;
    if (!a.paused) {
      a.pause();
    }
    a=new Audio(index+'.mp3');
    a.play();
    element.classList.toggle("active-song");
    activesong=document.getElementsByClassName("active-song")[0];
    activeEl = activesong.getElementsByTagName("img")[0].src;
    mainimg.setAttribute("src", activeEl);
    playbackimg.setAttribute("src", activeEl);
    let heading=element.getElementsByTagName("div")[0].getElementsByTagName("h5")[0].innerText;
    let artist=element.getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText;
    let playbackheading=document.getElementsByClassName("playback-head")[0];
    let playbackartist=document.getElementsByClassName("playback-artist")[0];
    playbackheading.innerText=heading;
    playbackartist.innerText=artist;
  });
});
volUp.addEventListener("click", () => {
  a.volume=0;
  volUp.classList.add("d-none");
  voldown.classList.remove("d-none");
});
voldown.addEventListener("click", () => {
  a.volume=1;
  voldown.classList.add("d-none");
  volUp.classList.remove("d-none");
});
play.addEventListener("click", () => {
  a.play();
  play.classList.add("d-none");
  pause.classList.remove("d-none");
});
pause.addEventListener("click", () => {
  a.pause();
  pause.classList.add("d-none");
  pause.classList.remove("d-inline");
  play.classList.remove("d-none");
});
lyrics.addEventListener("click", () => {
  lyrics.classList.add("active");
  playlist.classList.remove("active");
  document.getElementsByClassName("lyrics-text")[0].classList.remove("d-none");
  document.getElementsByClassName("lyrics-text")[0].classList.add("d-flex");
  playlistDiv.classList.add("d-none");
  playlistDiv.classList.remove("d-flex");
});
playlist.addEventListener("click", () => {
  lyrics.classList.remove("active");
  playlist.classList.add("active");
  document.getElementsByClassName("lyrics-text")[0].classList.add("d-none");
  document.getElementsByClassName("lyrics-text")[0].classList.remove("d-flex");
  playlistDiv.classList.add("d-flex");
  playlistDiv.classList.remove("d-none");
});
back.addEventListener('click',()=>{
  lyrics.click();
  document.getElementsByClassName("lyrics-text")[0].querySelectorAll("p")[0].style.color="rgba(255,255,255,0.7)";

})
next.addEventListener('click',()=>{
  document.getElementsByClassName("lyrics-text")[0].querySelectorAll("p")[0].style.color="rgba(255,255,255,0.7)";

  lyrics.click();
})