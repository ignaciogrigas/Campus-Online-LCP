let centralImg = document.querySelector("#welcome_letter");
let foward = document.querySelector(".fa-angle-right");
let backwards = document.querySelector(".fa-angle-left");

foward.addEventListener("click",function(e){
pageNumber=parseInt(centralImg.src.slice(-6,-4))
    if(pageNumber=== 6){
        centralImg.src = "/images/welcome_letter-01.jpg" 
    }else{
        fowardPageNumber=pageNumber + 1
        centralImg.src = "/images/welcome_letter-0"+ fowardPageNumber+".jpg"
    }
})
backwards.addEventListener("click",function(e){
    pageNumber=parseInt(centralImg.src.slice(-6,-4))
        if(pageNumber=== 1){
            centralImg.src = "/images/welcome_letter-06.jpg" 
        }else{
            fowardPageNumber=pageNumber -1
            centralImg.src = "/images/welcome_letter-0"+ fowardPageNumber+".jpg"
        }
    })