console.log("welcome")

var form=document.getElementById('my-form')

form.addEventListener('submit',myvalues)
function myvalues(e){
    e.preventDefault()
    myname=document.getElementById('username').value
    email=document.getElementById('email').value
    localStorage.setItem("Username", `${myname}`)
    localStorage.setItem("Emaild", `${email}`)
   
    
}

