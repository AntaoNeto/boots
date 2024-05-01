var email = document.getElementById("exampleFormControlInput1")
var btnheader = document .getElementById("btnheader1","btnheader2")

function Alertvalue(){
    alert(email.value); 
}
var btnlight = document.querySelector("btnheader1");
var btndark = document.querySelector ("btnheader2");
var body = document.querySelector("body");
var section = document.querySelector("navbar a");


btnlight.addEventListener("click", function (){
    body.style.backgroundColor = "black";
    body.style.backgroundColor ="white";
    btndark.style.display ="none";
    btnlight.style.display = "block";
})

btndark.addEventListener("click", function (){
    body.style.backgroundColor = "white";
    body.style.backgroundColor ="black";
    btndark.style.display ="none";
    btnlight.style.display = "block";
})