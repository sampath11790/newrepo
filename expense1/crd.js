console.log("welcome")
const form=document.getElementById("fm")
const ul=document.getElementById('list')

form.addEventListener('submit',createobj)

async function createobj(e){
    try{
        e.preventDefault()
        const expense=e.target.expense.value
        const discription=e.target.discription.value
        const select=e.target.select.value
        const obj={
            expense,
            discription,
            select
        }
       // console.log(obj)
    const postobj=await axios.post('https://crudcrud.com/api/946392c86541478d8ad6a40fe8f08164/expence',obj)
      show(postobj.data)
    } 
catch(err){
    console.log(err)
}
}

//get from server
async function get(){
    try{
        const getele= await axios.get('https://crudcrud.com/api/946392c86541478d8ad6a40fe8f08164/expence')
        const arr=getele.data
        for(var i=0;i<arr.length;i++){
           printscreen(arr[i]) 
    }
   
}catch(err){
  console.log(err)
}
}
get()

//print screen
async function show(e){
  try{
    const expense=e.expense
    const discription=e.discription
    const select=e.select
   
  const li=document.createElement("li")
  const text1=document.createTextNode(expense+"-")
  const text2=document.createTextNode(discription+"-")
  const text3=document.createTextNode(select)
  li.appendChild(text1)
  li.appendChild(text2)
  li.appendChild(text3)
  //edit button
  const editbtn=document.createElement('input')
  editbtn.type="submit"
  editbtn.value="edit"
li.appendChild(editbtn)
//   //delete button
  const deletebtn=document.createElement('input')
  deletebtn.type="submit"
  deletebtn.value="delete"
  li.appendChild(deletebtn)
  //console.log(li)
  ul.appendChild(li)

  //ul.innerHTML=ul.innerHTML+li
  }
  catch(err){
    console.log(err)
  }
    

}


//server to screen
async function printscreen(arr){
    try{
        const parrentnode=document.getElementById('list')
        const node=`<li id="${arr._id}">${arr.expense}-${arr.discription}-${arr.select}
        <button onclick=edit("${arr._id}","${arr.expense}","${arr.discription}","${arr.select}")>edit</button>
        <button onclick=delet("${arr._id}")>delete</button>
        </li>`
        parrentnode.innerHTML=parrentnode.innerHTML+node
    }
    catch(err){
     console.log(err)
    }
    
}


//delete btn function

async function delet(id){
    try{
       const objdel= await axios.delete(`https://crudcrud.com/api/946392c86541478d8ad6a40fe8f08164/expence/${id}`)
       screendelete(id)
    }
    
   catch(err){
     console.log(err)
   }
}

async function screendelete(id){
    try{
        const li=document.getElementById(id)
        console.log(li)
        li.remove()
    }catch(err){
        console.log(err)
    }
   
    //console.log("hi screen delete")
}

//edit function
async function edit(uid,uexpense,udiscription,uselect){
    try{
        const expense=document.getElementById("expense")
        const discription=document.getElementById("discription")
        const select=document.getElementById("select")
        expense.value=uexpense
        discription.value=udiscription
        select.value=uselect
        delet(uid)
    }catch(error){
       console.log(error)
    }
    
}
