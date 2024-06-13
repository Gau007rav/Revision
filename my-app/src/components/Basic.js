import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Basic() {
    let[color,setColor]=useState("blue")

    let clickHandler =()=>{
        setColor("red")
    }
    let clickHandler1 =()=>{
        setColor("green")
    }
  return (
    <div className='box' style={{width:"100%", height:"20px", backgroundColor:color}}>
        <button className='btn'  style={{border:"2px solid green",  marginRight:"20px"}} onClick={clickHandler}>red</button>
        <button className='btn'  style={{border:"2px solid green",  marginRight:"20px"}} onClick={clickHandler1}>green</button>
        <Link to="/">pagination</Link>|||
        <Link to="/Random">random</Link>|||
        <Link to="/start">start</Link>|||
        <Link to="/form">form</Link>|||
        <Link to="/todo">todo</Link>|||
        <Link to="/store">store</Link>|||
        <Link to="/reverse">reverse</Link>
    </div>
  )
}

export default Basic