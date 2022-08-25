class student{
    static count=0;
constructor(name,age,phonenumber){
  this.name=name;
  this.age=age;
  this.phonenumber=phonenumber;
  student.count=student.count+1
  
}
eligible(mark){
  if(mark>40){
    console.log(`${this.name} is eligible`)
  }
  else{
    console.log(`${this.name} is NOT eligible`)
  }
}
}
var obj1=new student("sam",30,12345)
var obj2=new student("viji",25,98643)
var obj3=new student("monith",15,96445)
var obj4=new student("kutti",24,68688)
var obj5=new student("Rethick",11,24261)
obj5.eligible(50)
console.log(student.count)