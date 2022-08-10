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
additems.style.color="green"