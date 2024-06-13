let person = {
    name:"gaurav",
    age:21
}

//this method is used to freeze individiual key;
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false
})

//freeze whole object

Object.freeze(person);

Object.seal(person)   // you cant add new property in this object
// deep copy
const obj = {a: 1 ,b: 2}
const objclone = Object.assign({},obj);
const objclone1 = JSON.parse(JSON.stringify(employee));
const objclone2 = { ...obj }

//call back function

 function higher(name,cb){
    console.log("hello my name is"+name)
    cb();
 }

 function greet(){
    console.log("good morning")
 }

 console.log(higher("gaurav",greet))

 //call method

 let school={
    name:"DPS",
    strngth:900,
    girlsStrength:function(){
      return  this.strngth/2
    },
    girlName:function(){
         console.log("hey there")
    }
 }

 school.girlsStrength();

 let girls={
    name:"abc",

 }

school.girlName.call(girls)

//map is higher order function which takes call back function and return a new array according to operation

let arr = [2,7,94,6,86]

let newArr = arr.map((ele,ind)=>{
   if(ele%2===0){
    console.log("primre")
   }
   else{
    console.log("nonPrime")
   }
})
console.log(newArr)

// filter is also a higher order function which takes call back function and return  a new array according to condition
// but it will return those element only which full fill the condition.
let arr1 = [3,5,3,9,7,54,3]

let uniqueEle = arr1.filter((ele,ind)=>{
    return arr1.indexOf(ele)===ind
})
console.log(uniqueEle)

//closures
//when we have nested functions parent and child then child have access to its parent function scope and global scope
//but revcerse is not true

function Parent(){
    let name =  "abc"
    return function Children(){
        console.log("my name is" + name)

    }

}

let greet1 = Parent();
greet1();

//call method is basically call that function which is not associated with your object.
let person1 ={
    name1:"heti"
}

function greet3(){
    console.log("hey " + this.name1) 

}

greet3().call(person1)

let car={
    color:"red",
    speed:300,
    distance:function(time){
        console.log(this.speed*time)
    }
}

