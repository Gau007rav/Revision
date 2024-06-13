import React,{useState,useCallback, useEffect ,useRef} from 'react'

function RandomPassGen() {
    let[length,setLength]=useState(5);
    let[numberAllowed,setnumber]=useState(true);
    let[characterAllowed,setCharacter]=useState(true);
    let[password,setPass]=useState("");
      let passRef = useRef(null)
    let lengthhandler =()=>{
        setLength(length+1)
    }
    let lengthhandlerminus =()=>{
        if(length<6){
            setLength(length)
        }else{
            setLength(length-1)
        }
       
    }

    let numberHandler =()=>{
        setnumber(!numberAllowed)
    }

    let characterHandler = ()=>{
        setCharacter(!characterAllowed)
    }

    let copyHandler = ()=>{
        passRef.current.focus();
        passRef.current.select()
        window.navigator.clipboard.writeText(password)
    }

    let passGenerator = useCallback(()=>{
         let pass = ""
         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
         if(numberAllowed){
            str += "0123456789"
         }
         if(characterAllowed){
            str += "!@#$%^&*()"
         }

         for(let i=0;i<length;i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
         }
         setPass(pass);
         
    },[length,numberAllowed,characterAllowed,setPass])

    useEffect(()=>{
        passGenerator();
    },[length,numberAllowed,characterAllowed])
  return (
    <div>
        <label>random password generator</label>
        <input value={password} type='text' ref={passRef}></input>
        <button onClick={copyHandler}>copy</button>
        <h1>length:{length}</h1>
        <button onClick={lengthhandler}>length++</button>
        <button onClick={lengthhandlerminus}>length--</button>
        <label>{numberAllowed ? 'numberAllowed' : 'NonumberAllowed'}</label>
        <input type="checkbox" checked={numberAllowed} onChange={numberHandler}></input>
        <label>{characterAllowed ? 'characterAllowed' : 'NoCharacterAllowed'}</label>
        <input type="checkbox" checked={characterAllowed} onChange={characterHandler}></input>
    </div>
  )
}

export default RandomPassGen