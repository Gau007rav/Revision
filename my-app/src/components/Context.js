//use context summary
// 1- create a context using craete context . this context may be userContext ,  loginContext etc

import React, { useState } from "react";

let userContext =React.createContext()

export default userContext;

// make a context provider and give data in that provider using object
//import userContext from the the appropriate folder
let userContextProvider = ()=>{
    let[user , setUser] = useState();
       return (
        <userContext.Provider  value={{user,setUser}}>
        {children}
        </userContext.Provider>
       )
}

export default userContextProvider

// use this context provider inside main component in which u will wrap all the component inside this contextprovider
<app>
  <userContextProvider>
    <Profile></Profile>
    <Login></Login>
  </userContextProvider>

</app>

// create a login component   and send data to user context
  import React,{useState,useContext} from "react";
  import userContext from "./userContext"
 

let Login = ()=>{
   let [name,setName]= useState("")
   let  [password,setPassword]=useState("")
   let{setUser} = useContext(userContext);
    let submitHandler =()=>{
        e.preventDefault();
        setUser(name,password)
    }
    return(
        <>
        <label>name</label>
        <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>password</label>
        <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.vaue)} ></input>
        <button onClick={submitHandler}>submit</button>
        </>
    )
}

// craete a profile component and get the data 
import React,{useState,useContext} from "react";
import userContext from "./userContext"


let profile = ()=>{
    let{user} = useContext(userContext);
    return (
        <>
          
            if(!user){
                console.log("please login") 
            }

            else{
                return (<div>
                    {user.userName}
                </div>)
            }
          
        </>
    )
}

export default profile;