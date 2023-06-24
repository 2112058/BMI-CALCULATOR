function submit(){
var a=document.getElementById("h").value;
var b=document.getElementById("w").value;
var c=(parseFloat(a)*parseFloat(a))/10000;
c=parseFloat(b)/c;
c=c.toFixed(2);
document.getElementById("screen1").innerHTML=c;
}
