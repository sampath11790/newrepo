console.log("welcome")


console.log("person1: shows ticket")
console.log("person2: shows ticket")
//1 promise
const premovie=async()=>{
    const promisewifebringticket= new Promise((resolve,reject)=>{
        setTimeout(()=>{
             return resolve("tickets")
        } ,3000)
        })


//2 promise
    const getpopcorn =new Promise((resolve,reject)=> resolve("popcorn"),5000) 
 //3rd promise    
    const addbutter =new Promise((resolve,reject)=> resolve("butter"),3000)  
  // 4th promise
    const getColdDrinks =new Promise((resolve,reject)=>resolve("cool drinks")) 
 //1 st promise await   
    const ticket= await  promisewifebringticket;//tickets

    // console.log(" wife ; i have the ticket")
    // console.log(" husband : we should go in")
    // console.log(" wife : no i am hungry")
   //2nd promise await 
   const popcorn= await getpopcorn  // popcorn

    //   console.log(` husband : i got some  ${popcorn} `)
    //   console.log(" husband : we should go in ")
    //   console.log(" wife : i need butter on my popcorn ")
    //   console.log(" husband : ok anything else ")
    //   console.log(" wife : i need cold drinks ")
// 4th promise await
  const cooldrink= await getColdDrinks //cool drink 
    //   console.log(` husband : i got some ${cooldrink} `)
    

   //3rd promise await    
    const butter= await addbutter  //butter

    // console.log(` husband : i got some ${butter} on popcorn`)
    // console.log(" husband : anything else   ")
    // console.log(" wife : we are getting late lets go ")
    // console.log(" husband : thanks for remind me ")
    
    let [popcrorns,coldrink,Butter,tickets]=await Promise.all([getpopcorn,getColdDrinks,butter,ticket])
     console.log(`${popcrorns} ${coldrink} ${Butter} ${tickets}`)
    return ticket
}
premovie().then((e)=>{
    console.log(` person3: shows  ${e}`)
})


console.log("person4: shows ticket")
console.log("person5: shows ticket")

//try catch error handling

const person1=async()=>{
    const askfood= new Promise((resolve,reject)=>{
        setTimeout(()=>{
             return reject("geting food")
        } ,3000)
        })
        let getfood;
        try{
          getfood= await askfood
        }catch{
             getfood="  hotel closed"
        }

        return getfood
        
    }

    person1().then((e)=>console.log(e))


 // converting normal  promise to async old project  

 const posts=[
    {title:"post one",body:"this is post one "},
    {title:"post two",body:"this is post two "},
    {title:"post three",body:"this is post three "},
    {title:"post four",body:"this is post four "}
]

//create post printing ui
function getpost(){
    //set time out
    setTimeout(() => {
        let output=""
        posts.forEach((post,index)=>
        {
         output+= `<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    }, 1000);
}
// create post
 async function createpost(item){
   try{
        const push=await new Promise((resolve,reject)=>{
         setTimeout(()=>{
             posts.push(item)
            const error=false
           if(error!=true){
             resolve(posts)
             
           }
           else{
               reject("error : somthing went wrong")
           }
          },3000)
         
     })
     console.log(push)
    }catch(e){
       console.log(e)
    }
     
    }

  createpost({title:"post five",body:"this is post five "})    



     //delete post
    async function deletepost(){
       try{
         const  delet=await new Promise((resolve,reject)=>{
            setTimeout(() => {
                   posts.pop()
               console.log(posts.length)
                if(posts.length==0){
                    resolve(posts) 
                    console.log("dele")
                }
                else{
                    reject("error: Array is empty now")
                 }
            },1000);
            })
            console.log (delet)
        }catch(e){
            console.log(e)
        }

        
     } 
     
      
deletepost()

async function addpost(){
   await createpost({title:"post 6",body:"this is post 6 "})
   await getpost()
   await createpost({title:"post 7",body:"this is post 7 "})
   await getpost()
   await createpost({title:"post 8",body:"this is post 8 "})
   await getpost()
   await createpost({title:"post 9",body:"this is post 9 "})
   await getpost()
}
addpost()
 
//  createpost({title:"post five",body:"this is post five "}) 
//  console.log(posts)
  
//deletepost().then((e)=>console.log(e))// deleting 
 //Promise.all([push,delet]).then((e)=>console.log(e))

 // async and await
 async function getplaystation(){
   try{
    let promise=await new Promise((resolve,reject)=>{
        let salary=3000
        let playstaion=6000;
        let ps4=5000
        setTimeout(()=>{
            if(salary>playstaion ){
                resolve("i can buy play station ")
            }
            else if(salary>ps4){
                resolve("i can buy play ps4 station ")
            }
            else{
                reject("sorry next time i will try buy ")
            }
        },2000)
    })
    console.log(promise)
   } 
   catch(e){
    console.log(e)

   }
   
}
getplaystation()
    
    