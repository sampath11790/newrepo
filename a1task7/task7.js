//parentElement
//traversing the Dom
var itemlist=document.querySelector("#items")
console.log(itemlist)
//parentNode
console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor="gray"

//parent element

// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor="gray"

//child node

console.log(itemlist.childNodes)

//Childern
console.log(itemlist.children)
itemlist.children[1].style.backgroundColor="yellow"
//firstchild
// console.log(itemlist.firstChild)
//firstElementChild

console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent="Hello 1";
// lastchild 
//console.log(itemlist.lastChild)

//Lastelelemtchild
console.log(itemlist.lastElementChild)
itemlist.lastElementChild.textContent="Hello 4"

//nextsibling;

console.log(itemlist.nextSibling);

//next sibleingelement
console.log(itemlist.nextElementSibling);

//previous sibling
console.log(itemlist.previousSibling);

//previous sibling element
console.log(itemlist.previousElementSibling)
//itemlist.previousElementSibling.style.color="blue";

//create HTML element

//create div

var newdive=document.createElement("div")



//add class
newdive.className="Hello"
//Add id
newdive.id="myid"

//add attribute
newdive.setAttribute("title" ,"HELLOdive")


//create textnode

var newdivtex=document.createTextNode("Hello world")

//add to dive

newdive.appendChild(newdivtex)
console.log(newdive)


//inserting
// 1. before head node
// var head=document.querySelector("header .container")
//  var tail=document.querySelector("header h1")
//     head.insertBefore(newdive,tail)

//2.before list

var ul=document.querySelector("ul")
 var li=document.querySelector("li")
console.log(ul)
console.log(li)
 
 ul.insertBefore(newdive,li);
 var node=document.querySelector("#myid")
 node.style.color="green"
 node.style.fontWeight="bold"


