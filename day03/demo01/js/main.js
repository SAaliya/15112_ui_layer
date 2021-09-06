console.log("main.js loaded");
//js =>dom =>document
function add(){
//1. num1
let num1=document.getElementById("num1").value;
//2. num2
    let num2=document.getElementById("num2").value;
//3. add 
    // console.log(num1+num2)
    let result=document.getElementById("result");
    result.innerHTML=parseInt(num1)+parseInt(num2);
}
