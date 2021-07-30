const loginPopup = document.querySelector(".signin-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){
 
    showPopup();

})

function showPopup(){
    const timeLimit = 1
    let i=0;
    const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
        clearInterval(timer);
            loginPopup.classList.add("show");
        } 
        console.log(i)
    },10000); // time; 1000 = 1 second
}


close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
})