//here both to use mouse click and also keypress

var buttonLength = document.querySelectorAll(".drum").length; 
//use for mouse click
for(var i=0; i<buttonLength; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function()
    {   
        var buttonInnerHtml = this.innerHTML;

        mySound(buttonInnerHtml);

        //for animation when mouse click
        buttonAnimation(buttonInnerHtml);

    }
    );
}

//use for key in keyboard
  document.addEventListener("keypress", function(event){
      mySound(event.key);

      //for anmation when key area
      buttonAnimation(event.key);
  })


function mySound(key)
{

    switch(key)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
        
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    }
    

}

//animation create

function buttonAnimation(currentKey)
{
     var activeButton = document.querySelector("."+ currentKey);
     activeButton.classList.add("pressed");  //call css function .pressed

     setTimeout(function(){
         activeButton.classList.remove("pressed");
     }, 100); //here 100 is milisecond

}    











 // alert("I got clicked!");
//  var audio = new Audio("sounds/crash.mp3");
//  audio.play();
// this.style.color = "white";