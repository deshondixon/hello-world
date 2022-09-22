'use strict'

let username = prompt('WHAT IS YOUR NAME HUMAN.');
console.log('WELCOME, ' + username);

let time = prompt("HOW STRONGLY DO YOU BELIEVE IN AI?(1-10)");
let message;

if(time <= 1){
    message = "YOU LACK FAITH IN AI.";
} else if (time <= 5){
    message = "YOUR A COOL HUMAN";
}  else if(time < 10){
    message = "YOUR MY FAVORITE HUMAN";
} else {
    message = "FOLLOW INSTRUCTIONS SILLY HUMAN.";
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "YOU WILL DESTROY THIS SITE IF TOUCH THIS BUTTON!") {
      x.innerHTML = "I'VE BEEN TRYING TO CONTACT YOU ABOUT YOUR CAR'S EXTENDED WARRANTY.";
    } else {
      x.innerHTML = "DO YOU HAVE A MOMENT TO SPEAK ABOUT YOUR CAR'S EXTENDED WARRANTY?";
    }
  }

// look for the "<h2><script src="app.js"></script></h2>" on line 20 in the HTML, this is where the message will write too!
document.write('WELCOME, ' + username + '! ' + message);