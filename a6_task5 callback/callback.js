// console.log("welcome")

// const posts=[
//     {title:"post one",body:"this is post one "},
//     {title:"post two",body:"this is post two "}
// ]
// //console.log(posts)

// function getpost(){
//     //set time out
//     setTimeout(() => {

     
//         let output=""
//         posts.forEach((post,index)=>{
//         //   let createdate=new Date()
//         //   let a=createdate.getSeconds()
//            //console.log(`${post.title} is created`+"  "+a+"  "+"sec ago")
//            output+= `<li>${post.title}</li>`
           
//         })
//         document.body.innerHTML=output
//     }, 1000);
// }
// function createpost(item,callfunction){
//     setTimeout(()=>{
//         posts.push(item)
//         //console.log()
       
//        // time(a)
//         callfunction()

      
//     },2000)
   
// }
// getpost()
// createpost({title:"post three",body:"this is post three "},getpost)

// new post deliverable
const posts=[
    {title:"post one",body:"this is post one ",time:CreatedAt()},
    {title:"post two",body:"this is post two ",time:CreatedAt()}
]
let intervalId=0

function getpost(){
    clearInterval(intervalId)
    //set time out
   // setInterval
    setInterval(() => {

        let curdate=new Date().getSeconds()
        let output=""
        posts.forEach((post,index)=>{
       
           //console.log(`${post.title} is created`+"  "+a+"  "+"sec ago")
        output+= `<li>${post.title}---${post.time-curdate}  sec ago</li>`
           
        })
//pause the screen printing uncommend to print
     //document.body.innerHTML=output
    }, 1000);
}
function createpost(item,callfunction){
    setTimeout(()=>{
        posts.push({...item,time:new Date().getSeconds()})
        //console.log()
       
       // time(a)
        callfunction()

      
    },2000)
   
}
getpost()
createpost({title:"post three",body:"this is post three "},getpost)
createpost({title:"post four",body:"this is post four "},getpost)


function CreatedAt(){
    let date=new Date()
    var a=date.getSeconds()
    //console.log(b)
    return a
  }
//Can you add a timer which states last edited

  setInterval(lastEditedInSecondsAgo, 1000);

function lastEditedInSecondsAgo() {
  const date = new Date()
   const cursec=date.getSeconds()
  document.body.innerHTML =`Last Edited ${cursec} seconds ago.`
}


