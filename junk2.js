var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
bo1=document.getElementById("bo1");
bo2=document.getElementById("bo2");
bo3=document.getElementById("bo3");
 bo1.onclick=function() {
  add=0
  for (i=0;i<4;i++){
  var rand=Math.floor(Math.random() * 10);
  arry[i]=rand;
  add+=arry[i];


  }
  bo1.innerHTML=arry;
  bo2.innerHTML=add;

}
