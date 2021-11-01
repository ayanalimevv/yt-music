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
let time=document.querySelectorAll("time");
let slider=document.getElementsByTagName("input")[0];
let playbackBar=document.getElementsByClassName("playback-bar")[0];
slider.value=0;
var sliderprogress;
let songId= ["a","b","c","d","e","f","g"]
let index = songId[0]

var a=new Audio(index+'.mp3');;
li.forEach(function myPlayer(element){
  element.addEventListener("click", () => {
    li.forEach((e) => {
      if (e.classList.contains("active-song")) {
        e.classList.remove("active-song");
      }
    });
    playbackBar.classList.remove("op-none");
    play.classList.add("d-none");
    pause.classList.add("d-inline");
    index=element.id;
    if (!a.paused) {
      a.pause();
    }
    a=new Audio(index+'.mp3');
    a.play();
    sliderprogress=setInterval(()=>{
      var currtime=Math.floor(a.currentTime);
      var percentageComplete=""+(Math.floor((currtime/(a.duration))*100));
      slider.value=(percentageComplete);
    },1000);
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


    a.onloadedmetadata = () =>  {
      let duration = a.duration/60
      duration = duration.toFixed(2)
      duration = duration.toString()
      duration = duration.replace('.',':')
      element.getElementsByClassName('time')[0].innerText = duration
    }
   
    play.click();

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
slider.addEventListener('input',()=>{
  console.log(10)
  let songtime=(((a.duration)*(slider.value)) / 100);
  a.currentTime=songtime;
  sliderprogress;
})
let playNext= ()=> {
  let id = songId.indexOf(index)
  id==6 ? id=0 :id++
  let nextSong = songId[id]
  document.getElementById(nextSong).click()
}
///Get Back To Previous Song
let playPrevious = ()=> {
  let id = songId.indexOf(index)
  id==0 ? id=6 : id--
  let nextSong = songId[id]
  document.getElementById(nextSong).click()
}

next.addEventListener('click',()=>{
  playNext()
})
back.addEventListener('click',()=>{
  playPrevious()
})