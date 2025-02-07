let crsr = document.querySelector(".maincursor")
let bgcrsr =document.querySelector(".bgcursor")
let body = document.querySelector("body")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top = dets.y +"px"
    bgcrsr.style.left=dets.x+"px"
    bgcrsr.style.top = dets.y +"px"
})