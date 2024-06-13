import React, { useEffect, useState } from 'react'

function UrlCustomHook(url) {
    let[data,setData]=useState()
    let[Error,setError]=useState()
    useEffect(()=>{
        let fetchData =async()=>{
               try {
                let res = await fetch(url);
                setData(res)
               } catch (error) {
                   setError(error)
               }
        }
        fetchData()
    },[url])
  return (
   {data,Error}
  )
}

export default UrlCustomHook

//throatling is basically optimization technique which limits the function call or Api call

function myDebouncing(cb,d){
    let id;
    clearTimeout(id)
    return function(...args){
       id= setTimeout(()=>{
            cb(...args)
        },d)
    }
}
myDebouncing()

//throatling is also a optimizing technique it will limits the event listeners meaans event will listen after some fixed amount of time.
function myThrotlling(cb,d){
    let last = 0;
    return function(...args){
        let now = new Date().getTime()
        if(now-last>d){
            return 
        }
        last=now
        cb(...args)

    }
}