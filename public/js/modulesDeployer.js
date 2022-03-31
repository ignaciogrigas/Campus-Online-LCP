let modules = document.querySelector("#modules");
let deployer = document.querySelector("#current_class .fa-angle-down");

deployer.addEventListener("click",function(){
     if(modules.style.display === "block"){
        modules.style.display="none"
     }else{
        modules.style.display="block"
     }
 })

let singleClasses = document.querySelectorAll(".single_classes_list");
let deployersClasses = document.querySelectorAll(".deployer");

for(let i= 0;i<singleClasses.length;i++){
   deployersClasses[i].addEventListener("click",function(){
      if(singleClasses[i].style.display === "none"){
       singleClasses[i].style.display="block"
      }else{
       singleClasses[i].style.display="none"
      }
  })
}

