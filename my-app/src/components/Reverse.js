import React, { useState,useRef } from 'react'

 const Reverse = () => {
    let [show,setShow] = useState(false)
    let [data,setData] = useState();
    let inputref = useRef();
    let clickHandler = (e)=>{
      inputref.current.focus();
      
    }

    let changeHandler = (e)=>{
       setData(e.target.value)
    }
  return (
    <div>
        <label>inputField</label>
        <input type={!show ? "password" : "text"} placeholder='add here'  ></input>
        <button onClick={()=>setShow(!show)}>{!show  ? "Show" :"Hide" }</button><br></br>
        <input type='text' ref={inputref} onChange={changeHandler} value={data}></input>
        <button onClick={clickHandler}>click </button>

    </div>
  )
}

export default Reverse;