console.log("welcome")

const posts=[
    {title:"post one",body:"this is post one "},
    {title:"post two",body:"this is post two "},
    {title:"post three",body:"this is post three "},
    {title:"post four",body:"this is post four "}
]
//console.log(posts)
//create post printing ui
function getpost(){
    //set time out
    setTimeout(() => {

     
        let output=""
        posts.forEach((post,index)=>{
      
           output+= `<li>${post.title}</li>`
           
        })
        document.body.innerHTML=output
    }, 1000);
}
// create a new post pushing in to our old list
function createpost(item){
   return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(item)

          const error=false
          if(error!=true){
            resolve()
          }
          else{
              reject("error : somthing went wrong")
          }
         },2000)
    })
    
   
}
//creating a new post if its resolved  posmise then calling getpost

// createpost({title:"post five",body:"this is post five "}).then(getpost)
// .catch(console.log);


// deteing post 
function mydelete(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
           posts.pop()
        //console.log(posts.length)
        if(posts.length>0){
            resolve(posts) 
        }
        else{
            reject("error: Array is empty now")
            
        }
    },1000);
    })

}
//updating last activity time 

const updateLastUserActivityTime= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           var date=new Date()
            posts.LastUserActivityTime=date
           
            resolve(posts.LastUserActivityTime)
        },2000)
         
      })
}




//createing a new post 
createpost({title:"post 10",body:"this is post 10",LastUserActivityTime:new Date()})
.then(console.log())

// promise all and 
Promise.all([createpost,updateLastUserActivityTime])
.then((createpost,updateLastUserActivityTime)=>{
  
    console.log()
}).catch(err=>console.log(err))

//before deletion
console.log(posts)

//delete post and  print 
mydelete().then(()=>{
    console.log(...posts)
}).catch(err=>console.log(err))

// mydelete().then(console.log).catch(err=>console.log(err))
// mydelete().then(console.log).catch(err=>console.log(err))
// mydelete().then(console.log).catch(err=>console.log(err))
// mydelete().then(console.log).catch(err=>console.log(err))
// createpost({title:"post 6",body:"this is post 6 "})
// createpost({title:"post 7",body:"this is post 7 "}).then(mydelete)
// .catch(err=>console.log(err))

//myfunction().then(console.log).catch(err=>console.log(err))
// .then(myfunction)
// .catch(err=>console.log(err))
//console.log(posts)


//promise All
const promise1=Promise.resolve("Hello world")
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"good bye")
})

Promise.all([promise1,promise2,promise3]).then(function (value){
    console.log(value)
}).catch(console.log)