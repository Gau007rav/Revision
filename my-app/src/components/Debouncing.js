function myDebouncing(cb,delay){
     let id;
     clearTimeout(id)
    return function (...args){
      id=   setTimeout(()=>{
            cb()
        },delay)
    
    }
}
 let debounc1= myDebouncing(()=>{
    console.log("hey")
  },500)
  let debounc2= myDebouncing(()=>{
    console.log("hey2")
  },500)
 let debounc3= myDebouncing(()=>{
    console.log("hey3")
  },500)

  console.log(debounc1())
  
  console.log(debounc2())
  
  console.log(debounc3())

  function myThrotlling(cb,d){
    let last =0
     return function(...args){
        let now = new Date().getTime();
        if(now-last>d){
            return
        }
        last=now;
        cb(...args)
     }
  }
