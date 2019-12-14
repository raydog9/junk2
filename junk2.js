var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
bo5=document.getElementById("bo5");
bo6=document.getElementById("bo6");

inp1.addEventListener("input",fun1);
inp2.addEventListener("input",fun1);

bu1.addEventListener("click", fun2);


function fun1(a,b) {
    a=parseFloat(inp1.value) || 0;
    b=parseFloat(inp2.value) || 0;
    let sum= a+b;
  //  if (sum == 0) {

    
    bo5.innerHTML=sum;
     return sum
    }

fun1(inp1,inp2);
bo5.innerHTML="";


function fun2() { 
    bo5.innerHTML="";
    bo6.innerHTML="";
    inp1.value="";
    inp2.value="";
}
