  let slides=document.getElementsByClassName("slider");
  // console.log(slides);

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
  
  setInterval(slideshow,1000);

  