 var a,b,c,d,e,m,n,o,x,arry=[],may=[],ray=[],say=[];
bo1=document.getElementById("bo1");
bo2=document.getElementById("bo2");
bo3=document.getElementById("bo3");
bo4=document.getElementById("bo4");
bo5=document.getElementById("bo5");
bo6=document.getElementById("bo6");
bo7=document.getElementById("bo7");
bo8=document.getElementById("bo8");

bu1.addEventListener("click",fun1);
bu2.addEventListener("click",fun2);

function fun1() {
    x++;
    i=parseFloat(x);
      const rand = {
        ran1:Math.floor(Math.random() * 10),
        ran2:Math.floor(Math.random() * 10),
        ran3:Math.floor(Math.random() * 10),
        ran4:Math.floor(Math.random () *10)
        };
    if ( rand.ran1 % 2 ==0) {
        arry.push(rand.ran1);
        bo5.innerHTML=rand.ran1;

        
    }
    else if ( rand.ran1 % 2 ==1 ) {
        ray.push(rand.ran1)
        bo6.innerHTML=rand.ran1;

    }

    if( rand.ran2 % 2 == 0) {
        may.push(rand.ran2);
        bo7.innerHTML=rand.ran2;

    }
    else if (rand.ran2 % 2 == 1) {
        say.push(rand.ran2);
        bo8.innerHTML=rand.ran2;

    }
     bo9.innerHTML=arry;
    b10.innerHTML=ray;
    b11.innerHTML=may;
    b12.innerHTML=say;
    b13.innerHTML=i;
}
function fun2() {
    bo5.innerHTML="";
    bo6.innerHTML="";
    bo7.innerHTML="";
    bo8.innerHTML="";

}

