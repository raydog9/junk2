    var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[], ray=[],say=[];
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

    bo1.innerHTML="1 - 100";
    bo2.innerHTML="101 - 200";
    bo3.innerHTML="201 - 300";
    bo4.innerHTML="301 - 400";

    



    function fun1 () {
    const ran= {

        x:Math.floor(Math.random() *100),
        y:Math.floor(Math.random() *(200 - 100) +100),
        z:Math.floor(Math.random() *(300 - 200) +200),
        zz:Math.floor(Math.random() * (400 -300) + 300)
    };
    bo5.innerHTML=ran.x;
    bo6.innerHTML=ran.y;
    bo7.innerHTML=ran.z;
    bo8.innerHTML=ran.zz;
    return
}

    function fun2() {
        bo5.innerHTML="";
        bo6.innerHTML="";
        bo7.innerHTML="";
        bo8.innerHTML="";
    }

