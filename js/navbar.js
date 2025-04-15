function hello(){
    document.querySelector(".menu-list").style.display="inline";
    document.querySelector("#nav-btn").style.display="none";
    document.querySelector("#close-btn").style.display="block";
}

document.querySelector("#close-btn").addEventListener("click",()=>{
    document.querySelector(".menu-list").style.display="none";
})
