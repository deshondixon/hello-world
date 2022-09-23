"use strict";

function customAlert() {
  let usersName = prompt("What is your name human.");
  console.log(usersName);

  if (usersName == "Deshon") {
    alert("Hello Mr. Dixon");
  } else if (usersName == "Nicole") {
    alert("Hi Baby <3");
  } else if (usersName == "Charles") {
    alert("My brother, welcome!");
  } else if (usersName == "Raven") {
    alert("Hey, Raven Shaven!");
  } else {
    alert("Welcome to AI ARTISTRY!");
  }

  document.write(
    "Hello, " + usersName + "! " + "Welcome to AI Artistry" + " !"
  );
  return usersName;
}

customAlert();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function greatTHING() {
  let time = prompt("HOW STRONGLY DO YOU BELIEVE IN AI?(1-10)");
  if (time <= 1) {
    alert("YOU LACK FAITH IN AI.");
  } else if (time <= 5) {
    alert("YOUR A COOL HUMAN");
  } else if (time <=10) {
    alert("YOUR MY FAVORITE HUMAN");
  } else {
    alert("FOLLOW INSTRUCTIONS SILLY HUMAN.");
  }
  
}

greatTHING();

//---------------------------------------------------------------------------------------------------------------------------------------

function rateMyPage(){
  let rating = prompt('How many Eves would you rate my page? (From 1-5)');
  console.log(rating);

  for (let i = 0; i < rating; i++){
    console.log(i);
    document.write('<img style="width:50px; height:50px; margin:auto; padding:aut" src="https://i.pinimg.com/originals/25/59/ec/2559ecdebba551ddbc6d0f0332e57873.png" />');
  }
}




//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "YOU WILL DESTROY THIS SITE IF TOUCH THIS BUTTON!") {
    x.innerHTML =
      "I'VE BEEN TRYING TO CONTACT YOU ABOUT YOUR CAR'S EXTENDED WARRANTY.";
  } else {
    x.innerHTML =
      "DO YOU HAVE A MOMENT TO SPEAK ABOUT YOUR CAR'S EXTENDED WARRANTY?";
  }
}

myFunction();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

