import React,{useState} from 'react'

 const Store = () => {
    let[info,setInfo]=useState("");

    let changeHandler = (e)=>{
        setInfo(e.target.value)
      
            }
      
    
   
  return (
    <div>
        <label>store data</label>
        <input  onChange={changeHandler} value={info}></input>
         <h1>{info.split("").map((ele)=>ele)}</h1>
    </div>
  )
}


export default Store;