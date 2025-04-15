count=1;
function print(){   
    if(count<=9900){
        count=count+100;
        count++;
        setInterval( document.querySelector("#count").innerHTML=count+"+",1)
    }
 }
 print()
 setInterval(print,0.5)

////////////////
count2=0;
function print1(){
    if(count2<=95){
        // count2=count2+10;
        count2++;
        setInterval(document.querySelector("#count2").innerHTML="+"+count2+"%",1)
    }
}
 print1()
 setInterval(print1,0.5)

//  //////////////////

count3=0;
function print2(){
    if(count3<=199){
        // count2=count2+10;
        count3++;
        setInterval(document.querySelector("#count3").innerHTML=count3+"+",1)
    }
}
 print2()
 setInterval(print2,0.5)