var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
bo1=document.getElementById("bo1");
bo2=document.getElementById("bo2");
bo3=document.getElementById("bo3");
bo4=document.getElementById("bo4");

bu1.addEventListener("click",fun1);
bu2.addEventListener("click",fun2);

function fun1() {
    var rand=Math.floor(Math.random() * 30);
    a=rand;
    switch(true) {
        case a > 0 && a < 10:
            b="under 10";
            break;
        case a >10 && a < 20:
            b="under twenty";
            break;
        case a > 20 && a < 30: 
            b="under thirty";
            break;
    }
            bo1.innerHTML=a;
            bo2.innerHTML=b;

            return b

    }
    function fun2() {
        bo1.innerHTML="";
        bo2.innerHTML="";

    }
