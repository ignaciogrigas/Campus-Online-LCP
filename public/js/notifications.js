let notificationsMenu = document.querySelector("#notifications");
let bell = document.querySelector("header #notifications_bell");
let notificationIndicator= document.querySelector(".fa-circle");

bell.addEventListener("click",function(){
     if(notificationsMenu.style.display === "none"){
        notificationsMenu.style.display="block"
        notificationIndicator.style.display="none"
     }else{
        notificationsMenu.style.display="none"
     }
 })
