// Your code goes here
const funBusMouse = document.querySelector("h1");

funBusMouse.addEventListener("mouseover", function(event){
    event.target.style.color = "purple";
    setTimeout(function() {
        event.target.style.color = "";
      }, 300);
    }, false);

const funBusPics = document.querySelectorAll("img");

funBusPics[0].addEventListener('dblclick',function(event){
    funBusPics[0].style.border = "10px solid black";
    setTimeout(function(){
        funBusPics[0].style.border = "";
    }, 600);
}, false);
funBusPics[1].addEventListener('dblclick',function(event){
    funBusPics[1].style.border = "10px solid black";
    setTimeout(function(){
        funBusPics[1].style.border = "";
    }, 600);
}, false);
funBusPics[2].addEventListener('dblclick',function(event){
    funBusPics[2].style.border = "10px solid black";
    setTimeout(function(){
        funBusPics[2].style.border = "";
    }, 600);
}, false);
funBusPics[3].addEventListener('dblclick',function(event){
    funBusPics[3].style.border = "10px solid black";
    setTimeout(function(){
        funBusPics[3].style.border = "";
    }, 600);
}, false);

const textBiggie = document.querySelectorAll("h2");
// textBiggie[0].addEventListener("click", function(event){
//     event.target.style.color = "purple";
//     setTimeout(function(){
//         event.target.style.color = "";
//     }, 300);
// }, false);

// textBiggie[1].addEventListener("click", function(event){
//     event.target.style.color = "purple";
//     setTimeout(function(){
//         event.target.style.color = "";
//     }, 300);
// }, false);

// textBiggie[2].addEventListener("click", function(event){
//     event.target.style.color = "purple";
//     setTimeout(function(){
//         event.target.style.color = "";
//     }, 300);
// }, false);
// textBiggie[3].addEventListener("click", function(event){
//     event.target.style.color = "purple";
//     setTimeout(function(){
//         event.target.style.color = "";
//     }, 300);
// }, false);

textBiggie.forEach(el => el.addEventListener("click" , function(event){event.target.style.color = "purple"; setTimeout(function(){event.target.style.color = "";},300);},false))

const pText = document.querySelector('.intro p');

pText.addEventListener("keydown", event => {
    pText.style.color = "purple"
  });

//   ptext[1].addEventListener("keyup", () => {
//       ptext[1].style.color = "white";
//   })