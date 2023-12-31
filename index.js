var a = document.querySelectorAll("button");
for(var i = 0;i<a.length;i++)
{
    a[i].addEventListener("click", function() {
        audioplay(this.innerHTML);
        addanimation(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event){
    audioplay(event.key);
})
function audioplay(key)
{
    switch (key) {

        case "w":
            var audio = new Audio("./tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("./tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("./tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("./tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("./snare.mp3");
            audio.play();
        break;
        
        case "k":
            var audio = new Audio("./crash.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("./kick-bass.mp3");
            audio.play();
        break;

        default:
            alert(key);
         break;
    }
}
function addanimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){document.querySelector("."+key).classList.remove("pressed");},100);
}
