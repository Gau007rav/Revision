import React,{useRef, useState} from 'react'

function Guilt() {
    let[task,setTask]=useState("")
    let[data,setData]=useState([])
    let[selectValue,SetSelectValue]=useState("")
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[info,setInfo]=useState([]);
let btnRef= useRef()
    let clickhandler=(e)=>{
        btnRef.current.style.color="red"
       let info=setData([...data,task])
       setTask(" ")
    }

    let changeHandler=(e)=>{
       setTask(e.target.value)
    }
  let selectionHandler=(e)=>{
       SetSelectValue( e.target.value)  
  }

  let submitHandler=(e)=>{
      e.preventDefault();
      let userInfo=[{name:name,email:email}]
     let a= setInfo(()=>[...info,userInfo])
       let data = localStorage.setItem("userInfo",JSON.stringify(info))
       console.log(info);
        data = JSON.parse(localStorage.getItem("info"))||{}
       console.log(data)
   
  }

  
  return (
    <div>
        <label>task</label>
        <input onChange={changeHandler} value={task}></input>
        <button onClick={clickhandler} ref={btnRef}>add1</button>
        {data.map((e)=>{
            return(
                <div>
                    <li>{e}</li>
                </div>
            )
        })}

        <label>option select</label>
        <select  onChange={selectionHandler} value={selectValue}>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
        </select>
     {selectValue}
    

     <div>
        
           <label>name</label>
           <input type='text' onChange={(e)=>setName(e.target.value)} value={name}></input>
           <label>email</label>
           <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
           <button onClick={submitHandler}>submit</button>
        
     </div>
    </div>
  )
}

export default Guilt