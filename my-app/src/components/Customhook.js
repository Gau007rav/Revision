import React, { useState } from 'react'

function CountetrCustomhook(initialCount=0) {
    let[count,setCount]=useState(initialCount)

    let increment = setCount(count+1)
    let decrement = setCount(count-1)
    let reset = setCount(initialCount)
  return (
    
        {
            increment,decrement,reset
        }

    
  )
}

export default CountetrCustomhook