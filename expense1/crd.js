console.log("welcome")
const form=document.getElementById("fm")
const ul=document.getElementById('list')

form.addEventListener('submit',createobj)

function createobj(e){
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
axios.post('https://crudcrud.com/api/784925f429184674ab724834100971bb/expence',obj)
.then(res=>{
    show(res.data)
})
.catch(err=>console.log(err))
}


//get from server
axios.get('https://crudcrud.com/api/784925f429184674ab724834100971bb/expence')
.then((res)=>{
    const arr=res.data
    for(var i=0;i<arr.length;i++){
       printscreen(arr[i])    
    }
})
.catch(err=>console.log(err))

//print screen
function show(e){
  
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


//server to screen
function printscreen(arr){
    const parrentnode=document.getElementById('list')
    const node=`<li>${arr.expense}-${arr.discription}-${arr.select}
    <button onclick=edit("${arr._id}","${arr.expense}","${arr.discription}","${arr.select}")>edit</button>
    <button onclick=delet("${arr._id}")>delete</button>
    </li>`
    parrentnode.innerHTML=parrentnode.innerHTML+node
}


//delete btn function

function delet(id){
   axios.delete(`https://crudcrud.com/api/784925f429184674ab724834100971bb/expence/${id}`)
   .then(res=>console.log("this user removed from the cloud"))
   .catch(err=>console.log("err"))
}

//edit function
function edit(uid,uexpense,udiscription,uselect){
    const expense=document.getElementById("expense")
    const discription=document.getElementById("discription")
    const select=document.getElementById("select")
    expense.value=uexpense
    discription.value=udiscription
    select.value=uselect
    delet(uid)
}
