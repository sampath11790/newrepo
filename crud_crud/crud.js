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
.then(res=>{
    
    //print(res.data)
    for(var i=0;i<res.data.length;i++){
        createnode(res.data[i])
    }
})
.catch(err=>console.log(err))

//print and show user details backend to front end
// function print(data){
//     for(var i=0;i<data.length;i++){
//         //console.log(data[i].)
//         createnode(data[i]._id,data[i].username,data[i].email,data[i].phonenumber)

//     }
// }
function createnode(obj){
    //console.log(curval.email)
  console.log(obj)

    var node=`<li id="${obj._id}">${obj.username}-${obj.email}-${obj.phonenumber}
    <button onclick=edituser("${obj._id}","${obj.username}","${obj.email}","${obj.phonenumber}")   style="background-color:lightblue;">Edit</button> 
    <button onclick=deleteuser("${obj._id}")  style="color:red;">Delete User</button>

   
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
    //e.preventDefault()
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



