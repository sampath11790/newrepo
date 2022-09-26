console.log("welcome")



function addevent(){
    var button=document.getElementById("mybutton")
    button.addEventListener("click",myfunction)
    let count=0
     function myfunction(){
       
       console.log("button clicked"+" " +count++)
   
    }
}
var x=addevent()
//var button=document.getElementById("mybutton")
window.addEventListener("DOMContentLoaded",print)
 function print(){
    console.log( "DOM has loaded")
 }