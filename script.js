//បង្កើតអញ្ញាតដើម្បីសំគាល់
var idNav;
idNav=document.getElementById("nav");
//
// បង្កើត fuction ដើម្បីយកមកប្រើប្រាស់
function text (){
    document.getElementById("nav").style.backgroundColor= "red";
    idNav.style.color="blue";
}
// 
function triangleAre (){
    // var w = document.getElementById("width").valueAsNumber;
    var w = width.valueAsNumber;
    // var h = document.getElementById("height").valueAsNumber;
    var h = height.valueAsNumber;
    var output = w*h /2 ;
    alert(output);
}
// 

function textStyle(){
    var text =document.getElementById("text");
    text.style.color="white";
    text.style.backgroundColor="skyblue";
    text.style.fontSize="40px";
}
function eraseTextStyle(){
    var text =document.getElementById("text");
    text.style.color="";
    text.style.backgroundColor="";
    text.style.fontSize="";
}