import React from 'react'
import { useState, useEffect } from 'react'
function Start() {
  let country = ["india", "argentina", "australia", "japan", "korea"]
  let [calc, setCalc] = useState(0)
  let[table,setTable] =useState([])
  useEffect(() => {
   fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setTable(json))
  },[])
  let clickhandler = () => {
    setCalc(calc++)
  }
  return (
    <div>Start!!!!
      <button onClick={clickhandler}>add</button>
      {calc}
      {table.map((item)=>{
        return(
          <div>{item.id}
          <div>{item.title}</div>
          </div>
        )
      })}
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      {country.map((item, index) => {
        return (
          <div>{item}
            <div>{index}</div>
          </div>

        )
      })}
    </div>

  )
}

export default Start