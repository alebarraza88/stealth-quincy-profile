var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function(){
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function(){
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function(){
    pets.innerText = "20K";
});

var themeSwitchInput = document.querySelector("#toggle");

var div = document.querySelector(".ball");

var h1 = document.querySelector("h1");

var body = document.querySelector("body");

var ball = document.querySelector(".ball");

themeSwitchInput.addEventListener("click", function () {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      ball.classList.remove("move-right");
      h1.innerText = "Stealth Nykko";
    } else {
      body.classList.add("light");
      ball.classList.add("move-right");
      h1.innerText = "Party Nykko";
    }
  });



