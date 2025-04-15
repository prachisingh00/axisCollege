let mode="";
let btn=document.getElementById("btn");
function change(){
    if(mode=="light"){
        mode="dark";
        btn.innerHTML=mode;
        document.body.style .backgroundColor="white"
        document.body .style .color="black"
    }else{
        mode="light"
        btn.innerHTML=mode
         document.body.style .backgroundColor="black"
        document.body .style .color="white"
    }
}


// /////
let slides=document.getElementsByClassName("slider");
console.log(slides);

let status=0;

function prev(num){
  status=status+num;
  slideshow();
}

function next(num){
  status=status+num;
  slideshow();
}

function slideshow(){

  if(status<0){
    status=slides.length-1;
  }

  if(status==slides.length){
    status=0
  }

  for(slide of slides){
      slide.style.display="none";
      }
  slides[status].style.display="block";

}
slideshow();




// // ////

// let successSlide=document.getElementsByClassName("success-slider");
// console.log(successSlide);

// let statues=0;

// function successprev(num){
//   statues=statues+num;
//   slideshow();
// }

// function successnext(num){
//   statues=statues+num;
//   slideshow();
// }

// function slideshow(){

//   if(statues<0){
//     statues=successSlide.length-1;
//     }

//     if(statues==successSlide.length){
//       statues=0
//     }

//     for(slide of successSlide){
//       slide.style.display="none";
//     }
//     successSlide[statues].style.display="block";
// }

// slideshow();


