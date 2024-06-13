import React,{useEffect,useState,useRef} from 'react'

function Hooks() {
    let[data,setData]=useState("")
    let[info,setInfo]=useState([])
    let currRef = useRef()

    useEffect(()=>{
        fetch('http://localhost:7000/login')
            .then(res=>res.json())
            .then(json=>setInfo(json))
    })
    let changeHandler=(e)=>{
        setData(e.target.value)
    }

    let clickme =()=>{
        currRef.current.focus()
    }
  return (
    <div>hellooooooooo
    <input onChange={changeHandler} value={data} ref={currRef}></input>    
     {data}
     {info.map((ele,ind)=>{
        return(<div><table>
            <tr>{ele.title}</tr>
            <tr>
                <td>{ele.category}</td>
                <td>
                    {ele.price}
                </td>
            </tr>
            </table></div>)
     })}
     <button onClick={clickme}>btn</button>
    </div>
  ) 
}

export default Hooks