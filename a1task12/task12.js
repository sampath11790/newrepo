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

