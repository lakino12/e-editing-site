document.querySelectorAll(".clip.real").forEach(function(c){var v=c.querySelector("video");
function t(){if(v.paused){document.querySelectorAll(".clip.real video").forEach(function(o){if(o!==v)o.pause()});v.play()}else v.pause()}
c.addEventListener("click",function(){if(!c.classList.contains("playing"))t()});
v.addEventListener("play",function(){c.classList.add("playing");v.controls=true});
v.addEventListener("pause",function(){c.classList.remove("playing")});
v.addEventListener("ended",function(){c.classList.remove("playing");v.controls=false});
});
