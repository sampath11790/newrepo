console.log("welcome")
var form=document.getElementById("fm")
var ul=document.getElementById("items")


form.addEventListener("submit",myfunction)
form.addEventListener('submit',createobj)

function createobj(e){
    e.preventDefault()
    let expence=e. target.expence.value
    let discription=e. target.discription.value
    let select=e. target.select.value
    let newobj={
        expence,
        discription,
        select
    }
    let string=JSON.stringify(newobj)
      let storage=localStorage.setItem(select,string)
    console.log(newobj)
}


function myfunction(e){
    
    e.preventDefault()
    let expence=e. target.expence.value
    let discription=e. target.discription.value
    let select=e. target.select.value



    var listnode=document.createElement("li")
    listnode.className='listitem'
    listnode.id='list'

    var textnode1=document.createTextNode(expence+ "--")
    var textnode2=document.createTextNode(discription+"-- ")
    var textnode3=document.createTextNode(select+"--")

    listnode.appendChild(textnode1)
    listnode.appendChild(textnode2)
    listnode.appendChild(textnode3)

   // console.log(listnode)
    ul.appendChild(listnode)

    var editbtn=document.createElement('input')
    editbtn.type="submit"
    editbtn.value="edit "
        //editbtn.className="ebtn"
       
       // height: 25px; width: 100px"
        listnode.appendChild(editbtn)
    var delbtn=document.createElement('input')
        delbtn.type="submit"
         delbtn.value="detele "
         //delbtn.className="dbtn"
    listnode.appendChild(delbtn)
} 

window.addEventListener("DOMContentLoaded", getvalue)

function getvalue(){

    var local_Storage=localStorage
   
    var storage_key=Object.keys(local_Storage)
   //console.log(storage_key)
   for(var i=0;i<storage_key.length;i++){
          var key=storage_key[i];
           str_object=local_Storage[key]
           my_value=JSON.parse(str_object)
       // console.log(my_value)
         onscreenview(my_value)
       
    }
}
function onscreenview(my_value){
    var parrentnode=document.getElementById('items')
    
    var a=my_value.expence
    var b=my_value.discription
    var c=my_value.expence
   
    //added new list with delete button and edit with function
    var child=`<li id="${my_value.select}">${my_value.expence}-${my_value.discription}-${my_value.select}
    <button onclick=edit(my_value)>Edit</button>
    <button onclick=deleteuser("${my_value.select}")>Delete User</button>
    </li>`
    //every time adding exist parent with li + new child
    parrentnode.innerHTML=parrentnode.innerHTML+child
}
function deleteuser(select){

    localStorage.removeItem(select)
    
   }
   function edit(obj){
  //console.log(a.discription)
    //console.log(c)
   // console.log("HI")
   var expence=document.getElementById("expence")
       var discription=document.getElementById("discription")
       var select=document.getElementById("select")
       expence.value=obj.expence
       discription.value=obj.discription
       select.value=obj.select

       localStorage.removeItem(select)


   }
  

