// console.log("welcome")

var form=document.getElementById('my-form')

form.addEventListener('submit',myvalues)
function myvalues(e){
    e.preventDefault()
    myname=document.getElementById('username').value
    email=document.getElementById('email').value
    // localStorage.setItem("Username", `${myname}`)
    // localStorage.setItem("Emaild", `${email}`)

    //storing the user details as an object in the local storage
    var obj={
        username:`${myname}`,
        Mail_id:`${email}`
    }
    console.log(obj)
   let myobj_serialized=JSON.stringify(obj);

    localStorage.setItem('object',myobj_serialized)

   

//console.log(deserialize)
   
    
}
//parse the string and show the user details in the frontend
var data=document.addEventListener('DOMContentLoaded', myfunction)
function myfunction(e){
    let recive_data=localStorage.getItem('object')
    let deserialize=JSON.parse(recive_data)
    document.getElementById('username').value=deserialize.username
    document.getElementById('email').value=deserialize.Mail_id
}



// let myobj={
//     name:"sam",
//     age:32
// }
// console.log(myobj)
// myobj_serialize=JSON.stringify(myobj)
// console.log(myobj_serialize)
// localStorage.setItem('myobj',myobj_serialize)
// console.log(localStorage)
//   recivedata=localStorage.getItem('myobj')
// let deserialize=JSON.parse(recivedata)
// console.log(deserialize)