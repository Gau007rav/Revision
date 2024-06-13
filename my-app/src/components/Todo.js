import React from 'react'
import { useState } from 'react'
function Todo() {
    let [task, setTask] = useState("");
    let [work, setWork] = useState([]);
    let changeHandler = (e) => {
        setTask(e.target.value)
        
    }

    let clickHandler = (event) => {
        setWork([...work, task])
       setTask("")

    }

    let delteHandler = (id) =>{
        console.log(id)
       let updateItem =  work.filter((ele,ind)=>{
            return (id !== ind)
        })
       setWork(updateItem)
    }
    return (
        <div>
            add your daily task here!!!
            <label>daily tasks!!</label>
            <input onChange={changeHandler} value={task}></input>

            <button onClick={clickHandler}> add</button><br></br>
            {work.map((item,ind) => {
                return (<div >
                    <li key={ind}>{item}</li>
                    <button onClick={()=>delteHandler(ind)}>delete</button>
                </div>)
            })}
        </div>
    )
}

export default Todo