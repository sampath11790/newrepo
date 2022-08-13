var form=document.getElementById("addForm")
var itemlist=document.getElementById("items")
//form submit event
form.addEventListener('submit', additem)
itemlist.addEventListener('click',removeitem)
//console.log(itemlist)
function additem(e){
    e.preventDefault()
   //get input value
   var newitem=document.getElementById('item').value

   //creating new li elelemt
   var li=document.createElement('li')
   li.className="list-group-item"
   //text node
   var newnode=document.createTextNode(newitem)

   //add text node with input value
   li.appendChild(newnode)

//adding edit button
      
       var editbtn=document.createElement("button")

      editbtn.className="btn btn-danger btn-sm float-right delete"

       var tx=document.createTextNode('Edit')
       editbtn.appendChild(tx)
       editbtn.style.backgroundColor="green"
       li.append(editbtn)      

   //create button element
    var deletbtn=document.createElement('button')
    deletbtn.className="btn btn-danger btn-sm float-right delete"
    deletbtn.id="hi"


    
   //creating text for deletbtn
   var btnnode=document.createTextNode("x")
       
   //append text node to delete button
   deletbtn.appendChild(btnnode)
    
  
      /
//append to the li
li.appendChild(deletbtn)

//append li to list

  // console.log(itemlist)
//creating edit button


  
    console.log(li)
itemlist.appendChild(li)


}

function removeitem(e){
    if(e.target.id.includes('hi')){
        if(confirm("are you sur?")){
             var li=e.target.parentElement;
                console.log(li)
            //itemlist.removeChild(li)
               li.remove()
        }

        else{
            console.log("press ok to Delelt")
        }
    }
}
