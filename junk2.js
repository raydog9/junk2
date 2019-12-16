 var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
bo1=document.getElementById("bo1");
bo2=document.getElementById("bo2");
bo5=document.getElementById("bo5");
bo6=document.getElementById("bo6");
bo7=document.getElementById("bo7");

inp1.addEventListener("input",fun1);
inp2.addEventListener("input",fun1);
bu2.addEventListener("click",fun2);

function fun1(a,b) {
    a=parseFloat(inp1.value) || 0;
    b=parseFloat(inp2.value) || 0;
    let sum=a+b;
    bo5.innerHTML=a;
    bo6.innerHTML=b;
    bo7.innerHTML=sum;
    return sum
}

function fun2() {
    bo5.innerHTML="";
    inp1.value="";
    inp2.value="";
}