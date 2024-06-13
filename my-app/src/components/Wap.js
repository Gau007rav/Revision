{/*two sum
function twoSum(arr,target){
    let obj ={};
   
    for(let i=0;i<arr.length;i++){
        let compliment = target-arr[i]
        if(obj[compliment]!== undefined){
            return [obj[compliment],i]
        }
        obj[arr[i]]=i
    }
    return[]
}

console.log(twoSum([2,7,3,5],9))

//find duplicates from an array

function duplicates(arr){
    let result=[]
    let obj ={}
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        if(obj[num]===undefined){
            obj[num]=1
        }
        else{
            obj[num]++
        }
    }
    for(let num in obj){
      if (obj[num]===2){
        result.push(parseInt(num))
      }
    }
    return result
}

console.log(duplicates([3 ,4, 12, 3 ,12, 3 ,4 ,4 ,1,2, 7, 11, 6, 5]))

//longest common prefix in an array of string

function prefix(arr){
    if(arr.length===0){
        return ""
    }
    arr.sort((a,b)=>a.length-b.length)
    let prefix1 = arr[0];
    let result =""
    for(let i=0;i<=arr[0].length;i++){
       let char = prefix1[i];
       if(arr.every(str=>str[i]===char)){
        result += char
       }
       else{
        break;
       }

    }
    return result;
    
}

console.log(prefix(["abc","ab","abcd"]))

//kadane algorithm

function maxSum(arr){
    let maxNum = arr[0];
    let maxSoFar = arr[0]; 
    for(let i=1;i<=arr.length;i++){
         maxNum = Math.max(arr[i],maxNum+arr[i])
        if(maxNum>maxSoFar){
            maxSoFar=maxNum
        }
        else{
            maxSoFar=
        }
    }
    return maxSoFar
}
console.log(maxSum([1,2,3,-2,6]))

//remove duplicates


function unique(arr){
    let arr1 =[];
    for(let i=0;i<arr.length;i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
    }
    return arr1
}

console.log(unique([1,2,3,3,34,5,1]))

//String method
// localeCompare
let str1 = "gaurav"
let str2 = "rahul"

console.log(str1.localeCompare(str2))

//indexOf
let str3 = "he is a good boy"
str3.indexOf("is")
//3

//includes
str3.includes("a"); 

//Binary Search

function bianrySearch(arr,ele){
    let first = 0
    let last = arr.length-1 ;
    
    while(last>=first){
        let middle = Math.floor((first+last)/2);
        if(arr[middle]===ele){
            return  middle;
         }
         else if(ele<arr[middle]){
            last = middle-1
         }
         else{
            first= middle+1
         }
    }
    return -1
}

console.log(bianrySearch([1,5,3,6,8],6))
 


/*refrence taken from other schema syntax

let subscriber = new mongoose.schema({
    channel:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
},{timeStamps:true})




//reverse string

function reverseString(arr){
    let reverse = arr.split(" ").reverse().join(" ");
    return reverse
}

console.log(reverseString("hey you"))

//reverse array

function arrayReverse(arr){
    let arr1 = [];
    for(let i=arr.length-1;i>=0;i--){
        arr1 = arr1.push(arr[i])
    }
    return arr1;
}

console.log(arrayReverse([1,2,4,56,3]))

//duplicate in array

let duplicateremove = (arr)=>{
        let arr1 = new Set([...arr])
        return arr1;
}

console.log(duplicateremove([1,2,2,3,4,4]))

//removal of duplicates using for loop

function removeDuplicate(arr){
    let result = []
    
    for(let i=0;i<arr.length;i++){
         if(!result.includes(arr[i])){
            result.push(arr[i])
         }
         
    }
    return result
}

console.log(removeDuplicate([1,2,2,3,4]));

//find duplicate in array;

let findDuplicate = (arr)  =>{
   let arr1 =[];
   let seen ={};
   for(let i=0;i<arr.length;i++){
    if(seen[arr[i]]){
        arr1.push(arr[i])
    }
    else{
        seen[arr[i]]=true
    }
   }
   return arr1;
}

console.log(findDuplicate([1,2,2,3,3,4]))

//Objects Properties

let person ={
    name:"gaurav",
    age:20,
    job:"labour",
     energy: function(power){
          this.age=age;
          console.log(age*2)
     }
}

Object.keys(person)

function upload(arr){
    let result ={};
    for(let i=0;i<arr.length;i++){
        result[arr[i]]
        console.log(result)
    }
}
console.log(upload([1,2,3,4]))


//kadane algorithm

function maxSum(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let i=1;i<arr.length;i++){
        currentSum = Math.max(arr[0],currentSum+arr[0]);
        maxSum=Math.max(currentSum,maxSum);
    }
    return maxSum;
}

console.log(maxSum([1,2,-4,6,7]))

//fibbonaci series

function fibbonaci(n){
    let fib =[0,1]
    for(let i=2;i<n;i++){
         fib[i]=fib[i-1]+fib[i-2]
    }

    return fib;
}

console.log(fibbonaci(10))

//reverse a string without using reverse keyword;

function ultaString(str){
    let str1 = " ";
    for(let i=str.length-1;i>=0;i--){
        str1 = str1 + str[i]
    }
    return str1
}

console.log(ultaString("string is good"))

// Binary search

function binarySearch(arr,ele){
    let start = 0;
    let end = arr.length-1;
    while(end>start){
        let middle = Math.ceil((start+end)/2)
        let midValue = arr[middle]
        if(midValue == ele ){
            return middle
        }
        else if(ele>middle){
            start = middle+1
        }
        else{
            end = middle-1
        }
    }
    
}

console.log(bianrySearch([1,3,6,9,10],6))

// targetSum

function targetSum(arr,target){
    let arr1 = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                  arr1.push([arr[i],arr[j]])
            }
            else{
                console.log("target not found")
            }
        }
    }
    return arr1;
}

console.log(targetSum([1,2,3,5]),5)

// 150 Dsa questions , 
// backend course completion 
// ecommerce clone add to github repositries
   

