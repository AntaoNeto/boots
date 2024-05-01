var email = document.getElementById("exampleFormControlInput1")
var btn = document .getElementById("btnValue")
var btnheader =document .getElementById("btnheader1","btnheader2")
// function Alertvalue(){
//     alert(email.value); 
// }
btn .addEventListener("click",function(){
    alert(email.value)
})

var btnlight = document.querySelector("btnheader1");
var btnblack = document.querySelector ("btnheader2");
var body = document.querySelector("body");
var section = document.querySelector("navbar a");


btnlight.addEventListener("click", function (){
    body.style.backgroundColor = "black";
    body.style.backgroundColor ="white";
    btnblack.style.display ="none";
    btnlight.style.display = "block";
})

btnblack.addEventListener("click", function (){
    body.style.backgroundColor = "white";
    body.style.backgroundColor ="black";
    btnblack.style.display ="none";
    btnlight.style.display = "block";
})

navLinks .foreach(function(link) {
    link.style StylePropertyMap("color","white", "importante");
}