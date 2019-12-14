 var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
 
 
 bo1=document.getElementById("bo1");
 bo2=document.getElementById("bo2");
 bo3=document.getElementById("bo3");
 bo4=document.getElementById("bo4");

    bu1.addEventListener("click",fun1);
    bu2.addEventListener("click",fun2);

function fun1(list) {
 for (i=0;i<50;i++) {
     if (i%2==0 || i%9==0) {
         arry.push(i);
         arry.splice(10,1);


         bo5.innerHTML=arry;
         }
         
        }
        
        }
        
    function fun2() {
        ray=arry.slice();
        ray.reverse();
        ray.splice(-2,1);
 

         bo6.innerHTML=(ray);
        }        

        

