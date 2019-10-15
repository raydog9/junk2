

function funk()
{
var mya=[0];
for (i=0;i<17;i++){
var x=Math.floor(Math.random()*200);
mya[i]=x;
}
document.getElementById("box").innerHTML=mya[1];
document.getElementById("bo1").innerHTML=mya[2];
document.getElementById("bo2").innerHTML=mya[3];
document.getElementById("bo3").innerHTML=mya[4];
document.getElementById("bo4").innerHTML=mya[5];
document.getElementById("bo5").innerHTML=mya[6];
document.getElementById("bo6").innerHTML=mya[7];
document.getElementById("bo7").innerHTML=mya[8];
document.getElementById("bo8").innerHTML=mya[9];
document.getElementById("bo9").innerHTML=mya[10];
document.getElementById("b10").innerHTML=mya[11];
document.getElementById("b11").innerHTML=mya[12];
document.getElementById("b12").innerHTML=mya[13];
document.getElementById("b13").innerHTML=mya[14];
document.getElementById("b14").innerHTML=mya[15];
document.getElementById("b15").innerHTML=mya[16];
setTimeout(funk,100);
}
console.log("ray was here");
