var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];

 var inp1=document.getElementById("inp1");
 var inp2=document.getElementById("inp2");
 var bo1=document.getElementById("bo1");
 var sum=document.getElementById("sum");

 inp1.addEventListener("input",fun1);
 inp2.addEventListener("input",fun1);

 function fun1() {
     var one=parseFloat(inp1.value) || 0;
     var two=parseFloat(inp2.value) || 0;
     sum.innerHTML = one + two;
 }