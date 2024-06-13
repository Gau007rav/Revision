import React,{useState} from 'react'

function Practice() {
    let[task,setTask]=useState("")
    let[data,setData] = useState([])
    let changeHandler =(e)=>{
        setTask(e.target.value)
    }

    let clickHandler =()=>{
        
       
    
       setData(()=>[...data,task])
       
    }
  return (
    <div>
        <h1>todo</h1>
        <label>task</label>
        <input onChange={changeHandler} value={task}></input>
        <button onClick={clickHandler}>add</button>
        {data.map((ele,index)=>{
            return(<div><li>{ele}</li></div>)
        })}
    </div>
  )
}

export default Practice