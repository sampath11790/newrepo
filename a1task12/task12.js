console.log("welcome")
//target
var form=document.getElementById('my-form');
var Listitem=document.getElementById("add")

//event Listener
form.addEventListener('submit',myfunction)
form.addEventListener('submit',createList)

//creating object and storing
function myfunction(e){
    e.preventDefault()
    var name=e.target.username.value
    var email_id=e.target.email.value
    var obj={
        name,
        email_id
    }
   var change_string=JSON.stringify(obj)
   var setdata=localStorage.setItem(email_id,change_string)
  
  
}

//creating list
function createList(e){
    e.preventDefault()
    
    var name=e.target.username.value;
    var email_id=e.target.email.value;

    //creating li
     var Li=document.createElement('li')
         Li.className="item"
 
     var textnode1=document.createTextNode(name+" ")
     var textnode2=document.createTextNode(email_id)
     //text node
         Li.appendChild(textnode1)
         Li.appendChild(textnode2)
         Listitem.appendChild(Li)

}
//print all values in local storage

for(var i=0;i<localStorage.length-1;i++){
    
    var get_obj=localStorage.getItem( localStorage.key( i ) ) 
    
   var change_obj=JSON.parse(get_obj)

    console.log(change_obj.name)
}



window.addEventListener("DOMContentLoaded", getvalue)

function getvalue(){

    var local_Storage=localStorage
    //get keys
    var storage_key=Object.keys(local_Storage)
    //travers through arrey of keys
    for(var i=0;i<storage_key.length;i++){
          var key=storage_key[i];
           str_object=local_Storage[key]
           my_value=JSON.parse(str_object)
           //call the onscreen function
           onscreenview(my_value)
       
    }
}
//
function onscreenview(my_value){
    var parrentnode=document.getElementById('add')
    //added new list with delete button and edit with function
    var child=`<li id="${my_value.email_id}">${my_value.name}-${my_value.email_id}
    
    <button onclick=deleteuser("${my_value.email_id}") style="color:red;">Delete User</button>

    <button onclick=edituser("${my_value.name}","${my_value.email_id}") style="background-color:lightblue;">Edit</button>
    </li>`
    //every time adding exist parent with li + new child
    parrentnode.innerHTML=parrentnode.innerHTML+child
}


//local storage delete
function deleteuser(email){

 localStorage.removeItem(email)
 onscreendelete(email)
}
//on screedelete
function onscreendelete(email){
    
    var parrentnode=document.getElementById('add')
    var child=document.getElementById(email)
    parrentnode.removeChild(child)
}

function edituser(name,email){
    var username=document.getElementById("username")
    var mailid=document.getElementById("email")
    username.value=name
    mailid.value=email
    //remove our local storage

    localStorage.removeItem(email)
    
    // when i will submit it will create new object in our locl memory
    
}
