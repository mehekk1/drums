for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        makesound(this.innerHTML);
        animation(this.innerHTML);
    });
}
document.addEventListener("keypress", (event) => { 
    makesound(event.key);
    animation(event.key);
})
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3').play();
            break;
        case "W":
            var audio=new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3').play();
            break;
        case "A":
            var audio=new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3').play();
            break;
        case "S":
            var audio=new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3').play();
            break;
        case "D":
            var audio=new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3').play();
            break;
        case "J":
            var audio=new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3').play();
            break;
        case "K":
            var audio=new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3').play();
            break;
        case "L":
            var audio=new Audio('sounds/kick-bass.mp3').play();
            break;
      }
}
function animation(currentkey){
   var currentbutton= document.querySelector("."+currentkey);
   currentbutton.classList.add("pressed");
   setTimeout(function(){currentbutton.classList.remove("pressed");},100);
   

}
