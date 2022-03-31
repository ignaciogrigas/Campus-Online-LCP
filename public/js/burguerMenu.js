let burguerMenu = document.querySelector(".fa-bars");
let navBar = document.querySelector("#mobile_menu")
let cross = document.querySelector(".fa-xmark")

 burguerMenu.addEventListener("click",function(){
     navBar.style.display="block";
     cross.style.display="block";
     burguerMenu.style.display="none"
 })
 cross.addEventListener("click",function(){
    navBar.style.display="none";
    cross.style.display="none";
    burguerMenu.style.display="block"
})