console.log("welcome")

const forms=document.getElementById("form")
const ul=document.getElementById("list-item")

  forms.addEventListener("submit",creatobj)
//forms.addEventListener("submit",showscreen)

  function creatobj(e){
    
       e.preventDefault()
    const username=e.target.username.value
    const email=e.target.email.value
    const phonenumber=e.target.phonenumber.value
    const obj={
        username,
        email,
        phonenumber
    }

    axios.post('https://crudcrud.com/api/e6a3bf6fa9ad493fb9990a39926181da/myusers',obj)
    .then(e=>showscreen(e.data))
    .catch(err=>console.log(err))
    //  const chang_string=JSON.stringify(obj)
    //  const setstorage=localStorage.setItem(email,chang_string)
    //console.log(localStorage)
}
//get user details from server 
axios.get('https://crudcrud.com/api/e6a3bf6fa9ad493fb9990a39926181da/myusers')
.then(res=>print(res.data))
.catch(err=>console.log(err))

//print and show user details backend to front end
function print(data){
    for(var i=0;i<data.length;i++){
        //console.log(data[i].)
        createnode(data[i]._id,data[i].username,data[i].email,data[i].phonenumber)

    }
}
function createnode(id,name,email,phone){
    //console.log(curval.email)
   // console.log(id)

    var node=`<li id="${id}">${name}-${email}-${phone}
    <button onclick=edituser("${id}","${name}","${email}","${phone}")   style="background-color:lightblue;">Edit</button> 
    <button onclick=deleteuser("${id}")  style="color:red;">Delete User</button>

   
    </li>`
   
   ul.innerHTML=ul.innerHTML+node
   //ul.append(node)

}

function deleteuser(id){
    //console.log(id)
    axios.delete(`https://crudcrud.com/api/e6a3bf6fa9ad493fb9990a39926181da/myusers/${id}`)
    .then(res=>console.log("this user removed from the colud"))
    .catch(err=>console.log(err))
}

function edituser(uid,uname,uemail,uphone){
        const name=document.getElementById("username")
        const mail=document.getElementById("email")
        const phone=document.getElementById("phonenumber")
        name.value=uname
        mail.value=uemail
        phone.value=uphone
        deleteuser(uid)
    
    }

function showscreen(e){
    e.preventDefault()
  // console.log(e)
    const username=e.username
    const email=e.email
    const phonenumber=e.phonenumber
    const node=document.createElement('li')

    // text node
    const textnode1=document.createTextNode(username+"-")
    const textnode2=document.createTextNode(email+"-")
    const textnode3=document.createTextNode(phonenumber)
    node.appendChild(textnode1)
    node.appendChild(textnode2)
    node.appendChild(textnode3)

    //edite button
    const editbtn=document.createElement("input")
    editbtn.type="submit"
    editbtn.value="edit"
    node.appendChild(editbtn)

    //submitbutton
    const deletebtn=document.createElement("input")
    deletebtn.type="submit"
    deletebtn.value="delete"
    node.appendChild(deletebtn)

    ul.appendChild(node)
    //console.log(node)

    
 }
// //console.log(localStorage[1])
// //print


// // for(var i=0;i<localStorage.length;i++){
// //   const beforstring=localStorage.getItem(localStorage.key(i))
// //  const  normalobj=JSON.parse(beforstring)

// //     console.log(normalobj)
// // }

// //getback from local storage 

// window.addEventListener("DOMContentLoaded",showscreen)
// const local=localStorage
// function showscreen(){
//     const Storage=Object.keys(localStorage)
//     console.log(Storage)
//     for(var i=0;i<Storage.length;i++){
//         const key=Storage[i]
//         const curval=local[key]
//         const finalobj=JSON.parse(curval)

//         //console.log(finalobj)
//         createfunction(finalobj)
        
//     }
// }

// function createfunction(my_value){
//     //console.log(curval.email)

//     var node=`<li id="${my_value.email}">${my_value.username}-${my_value.email}-${my_value.phonenumber}
    
//     <button onclick=deleteuser("${my_value.email}") style="color:red;">Delete User</button>

//     <button onclick=edituser("${my_value.username}","${my_value.email}","${my_value.phonenumber}") style="background-color:lightblue;">Edit</button>
//     </li>`
   
//    ul.innerHTML=ul.innerHTML+node
//    //ul.append(node)

// }
// function deleteuser(a){
//    localStorage.removeItem(a)
// }
// function edituser(a,b,c){
//     const name=document.getElementById("username")
//     const mail=document.getElementById("email")
//     const phone=document.getElementById("phonenumber")
//     name.value=a
//     mail.value=b
//     phone.value=c
// deleteuser(b)

// }


