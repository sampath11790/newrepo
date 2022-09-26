var form=document.getElementById("addForm")
var itemlist=document.getElementById("items")

var  filter=document.getElementById('filter')
//form submit event
form.addEventListener('submit', additem)
itemlist.addEventListener('click',removeitem)
//filter event
filter.addEventListener('keyup',filteritem)



//add discription box before submit
var discription=document.createElement('input')
    discription.type="text"
    discription.id="dis"
    discription.className="form-control mr-2"
    discription.placeholder="Enter discription"
//var inputnode=document.getElementById("item")// 1st input
var buttonnode=document.getElementById("btn")// submit button
var paren=buttonnode.parentNode
   paren.insertBefore(discription,buttonnode)
//console.log(inputnode)
//inputnode.insertBefore(discription,buttonnode)





function additem(e){
    e.preventDefault()
   //get input value
   var newitem=document.getElementById('item').value
   var dis_input=document.getElementById('dis').value
   //creating new li elelemt
   var li=document.createElement('li')
   li.className="list-group-item"
   //text node
   var newnode=document.createTextNode(newitem)

   //add text node with input value
   li.appendChild(newnode)

//creating dd input
  
    //  dis_input=document.getElementById('dis').value

    let dd=document.createElement('dd')
    let ddtext=document.createTextNode(dis_input)
   
       dd.appendChild(ddtext)
 
      li.appendChild(dd)

  // console.log(li)

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
   // deletbtn.id="hi"


    
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


  
   // console.log(li)
itemlist.appendChild(li)


}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sur?")){
             var li=e.target.parentElement;
              //  console.log(li)
            //itemlist.removeChild(li)
               li.remove()
        }

        else{
            console.log("press ok to Delelt")
        }
    }
}


//filter item;

function filteritem(e){
   // console.log("hi")
    e.preventDefault()


    // convert text into lower case
var text=e.target.value.toLowerCase()

var items=document.getElementsByTagName('li')

//console.log(items[0].lastChild.textContent)
var arraylist=Array.from(items)
//console.log(arraylist)
//convert to an array
arraylist.forEach(myfunction)
//console.log(items.firstChild.textContent)
function myfunction(item)  {
    var itemname=item.firstChild.textContent
 //console.log(itemname.firstChild)
    if(itemname.toLowerCase().includes(text)==true){
        item.style.display='block'
    }else{
        item.style.display='none'
        console.log("hi")
    }
}
}

function adddescription(e){
 

    var newitem=document.getElementById('item').value
    var dd=document.createElement('dd')
   var newnode=document.createTextNode(newitem)
  
      dd.appendChild(newnode)

    //console.log(dd)
    console.log("hi")
    console.log(dd)
    

}

