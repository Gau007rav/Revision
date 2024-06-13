import React, { useEffect, useState } from 'react'

function CodeGenerator() {
    let[length,setLength]=useState(5)
    let[char,setChar]=useState(true);
    let[number,setNumber]=useState(true)
    let[pass,setPass]=useState()

    let incrementHandler =()=>{
        setLength(length+1)
    }
    let decrementHandler =()=>{
        if(length===5){
           return
        }else{
            setLength(length-1)
        }
        
    }

    let numberHandler=()=>{
        setNumber(!number)
    }
    let charHandler=()=>{
        setChar(!char)
    }

    let CodeGenerator =()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let Password=""
        if(char){
            str += "!@#$%&~"
        }
        if(number){
            str+="1234567890"
        }
        for(let i=0;i<length;i++){
         let character=   Math.floor(Math.random()*str.length+1)
         Password += str.charAt(character)
         setPass(Password)
        }
       

    }

    useEffect(()=>{
        CodeGenerator()
    },[number,char,length])
  return (
    <div>
        <label>CodeGenerator</label>
        <input type='text' placeholder='code'  value={pass}></input>
        <h3>codeLength:{length}</h3>
        <button onClick={incrementHandler}>lengthIncrease</button>
        <button onClick={decrementHandler}>lengthDecrease</button>
        <label>charecterAllowed</label>
        <input type='checkBox' checked={char} onChange={charHandler}></input>
        <label>NumberAllowed</label>
        <input type='checkBox' checked={number} onChange={numberHandler}></input>
    </div>
  )
}

export default CodeGenerator