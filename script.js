let crsr = document.querySelector(".maincursor")
let bgcrsr =document.querySelector(".bgcursor")
window.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top = dets.y +"px"
    bgcrsr.style.left=dets.x+"px"
    bgcrsr.style.top = dets.y +"px"
})

//hero 3
let firstquestion = document.querySelector(".ques1")
let secondquestion = document.querySelector(".ques2")

let des = document.querySelector(".questxt1 pre")
let secdes = document.querySelector(".questxt2 pre")
let click =0;
firstquestion.addEventListener("click",function(){
    if(click==0){
    des.style.display = "block";
    click = 1;
    }
    else{
        des.style.display = "none";
        click = 0;
    }
})
secondquestion.addEventListener("click",function(){
    if(click==0){
    secdes.style.display = "block";
    click = 1;
    }
    else{
        secdes.style.display = "none";
        click = 0;
    }
})

//hero 6
let hero6heading = document.querySelector(".hero6head h1")
let hero6box = document.querySelector(".hero6container")
let arr = [hero6box.childNodes[1],hero6box.childNodes[3],hero6box.childNodes[5]]
arr.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        hero6heading.style.webkitTextStroke = "2px #B3E824";
    })
 ele.addEventListener("mouseleave",function(){
        hero6heading.style.webkitTextStroke = "2px rgb(255, 255, 255)";
        ele.style.background="#B3E824";
    })
})
let cafe = document.querySelector(".cafe")
let  golf = document.querySelector(".golf6")
let adventure = document.querySelector(".adventure")
hero6boxele = [cafe,golf,adventure]
hero6boxele.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.display = "block";
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.display = "none";
    })

})
