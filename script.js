var vid = document.getElementById("myAudio");

function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}

function viewDiv(){
  document.getElementById("div1").style.display = "block";
}