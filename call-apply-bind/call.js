var user={
    firstname:"sampath",
    lastname:"sam"

}
function fullname(age,place){
    console.log(this.firstname+" "+this.lastname+" ,"+age+" ,"+ place)
}
//CALL
fullname.call(user)

var user1={
    firstname:"vijay",
    lastname:"kumar"
}
//APPLY
//var extradetails=[32,"tamilnadu"]
//fullname.apply(user1,extradetails)
fullname.apply(user,[31,"tamilnadu"])//we can use both way
//BIND
var bind=fullname.bind(user)
bind(31,"bangalore")

//NEW OBJECT
var object= {
    age:20
}
function print(){
    console.log(this.age)
}
var newbind=print.bind(object)
newbind()

//currying

let multiple=function(x,y){
    console.log(x*y)
}
let multiplebytwo=multiple.bind(this,2)
multiplebytwo(5)

let multiplebythree=multiple.bind(this,2,3)
multiplebythree()
//by closur
let newmultiple= function(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplebythree1=newmultiple(4)
multiplebythree1(3)

