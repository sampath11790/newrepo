//examin document element
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
//     document.titel="hi";
// //console.log(document.head)
// console.log(document.all[10])
// //document.all[10].textContent="welcome"
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//get elementById

console.log(document.getElementById("header-title"))
var headertitle=document.getElementById("header-title");
var header=document.getElementById("main-header");
//console.log(headertitle.innerHTML="hi")
//console.log(headertitle.textContent="bye")
//headertitle.style.borderBottom="solid 3px #000"
//header.style.borderBottom="solid 3px #000"
var additems=document.getElementById("additem");
//additems.style.fontWeight= "bold"
additems.style.textTransform="uppercase"
//additems.style.color="green"

//traver index

// var item=document.getElementsByClassName('list-group-item')
// console.log(item[1])
// item[1].style.fontWeight="bold"
// item[1].textContent="hello";
// item[1].style.backgroundColor="yellow";
//dont do this
//item.style.backgroundColor="green"
//so follow below step;

// for(var i=0;i<item.length;i++){
//     item[i].style.backgroundColor="lightblue"
// }
// item[2].style.backgroundColor="green"
// item[0].style.color="blue"
// for(var i=0;i<item.length;i++){
//     item[i].style.fontWeight="bold"
// }

// var lis=document.getElementsByClassName("new-list")
//        lis[0].innerText="hello"
//        lis[0].style.fontWeight="bold"
//        lis[0].style.listStyle='none';
//        lis[0].style.backgroundColor="yellow"

//        var li=document.getElementsByTagName("li")   
//        li[4].style.color="green"
       

//       console.log(lis)

//QUERYSELECTOR
// var head =document.querySelector('#main-header');
// head.style.borderBottom=" solid 5px yellow";
// var input=document.querySelector('input');
//      input.value='Am new'//its will view our input box as defauld value
     
//  var submit=document.querySelector('input[type="submit"]');
//  submit.value="HI SEND";
 
//  var item=document.querySelector(".list-group-item");
//   item.style.color="red";

//   var lastitem=document.querySelector(".list-group-item:last-child")
//      lastitem.style.color="yellow"

   var seconditem=document.querySelector(".list-group-item:nth-child(2)");
   seconditem.style.backgroundColor="yellow" 
    var thirditem=document.querySelector(".list-group-item:nth-child(3)");
    //invisible child item
    thirditem.style.display="none ";
    //thirditem.style.backgroundColor="red"

   //QUERYSELECTOR ALL
   //  var titels=document.querySelectorAll(".title");
  //console.log(titels)
    var item=document.querySelectorAll("li")
    item[1].style.color="green";
    var add=document.querySelectorAll("li:nth-child(odd)")
    for(var i=0;i<add.length;i++){
       add[i].style.backgroundColor="green"
    }
