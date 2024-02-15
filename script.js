var getColor=document.getElementById("button")
getColor.addEventListener("click",function(){
 var randomNum=Math.floor(Math.random()*16777215)
 var b_color="#"+randomNum.toString(16);
document.body.style.backgroundColor=b_color;
var colorcode=document.getElementById("name")
colorcode.innerHTML=b_color;
});
