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
header.style.borderBottom="solid 3px #000"
var additems=document.getElementById("additem");
//additems.style.fontWeight= "bold"
additems.style.textTransform="uppercase"
//additems.style.color="green"

//traver index

var item=document.getElementsByClassName('list-group-item')
console.log(item[1])
item[1].style.fontWeight="bold"
item[1].textContent="hello";
item[1].style.backgroundColor="yellow";
//dont do this
//item.style.backgroundColor="green"
//so follow below step;

// for(var i=0;i<item.length;i++){
//     item[i].style.backgroundColor="lightblue"
// }
item[2].style.backgroundColor="green"
item[0].style.color="blue"
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight="bold"
}

