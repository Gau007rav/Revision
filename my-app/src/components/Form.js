import React from 'react'
import { useState } from 'react'

function Form() {
    let[name,setName] = useState("")
    let[email,setEmail] = useState("")
    let [data,setData] = useState([])
    let changeHandler = (e) =>{
     let axe=setName(e.target.value)
        
    }
    let emailHandler = (e) =>{
      let rex = setEmail(e.target.value)
    }

    let clickHandler = () =>{

      let info ={name:name,email:email}
        setData(()=>[...data,info])
   
        
    }

    let table = () =>{
        for(let i=1 ; i<=10 ; i++){
            console.log(2*i);
        }
    }
  return (
    <div>
      <h1>form fill here</h1>
      <label>name:</label>
       <input onChange={changeHandler} value={name}></input>
       <label>email:</label>
       <input onChange={emailHandler} value={email}></input>
       <button onClick={clickHandler}>submit</button>
     <div> {data.map((item,index)=>{
        return(<span><li>{item.name}</li><li>{item.email}</li></span>)
       })}</div> 
       <button onClick={table}>table</button>
    </div>
  )
}

export default Form