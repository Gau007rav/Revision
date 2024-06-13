import React, { useState,useEffect } from 'react'

function CurrencyConverter() {
    let[currency1,setCurrency1]=useState()
    let[currency2,setCurrency2]=useState()
    let[inputCurrency,setInputCurrency]=useState()
    let[resultCurrency,setResultCurrency]=useState()
    let currencySetHandler1 =(e)=>{
       setCurrency1 (e.target.value)
    }

    let currencySetHandler2=(e)=>{
        setCurrency2(e.target.value)
    }

    let changeHandler=(e)=>{
        setInputCurrency(e.target.value)
        
    }

    let convertCurrency = ()=>{
        if (currency1 && currency2 && inputCurrency) {
            // Dummy conversion logic, replace with actual conversion logic
            let conversionRate;
            if (currency1 === 'rupees' && currency2 === 'dollar') {
              conversionRate = 1 / 80;
            } else if (currency1 === 'rupees' && currency2 === 'pounds') {
              conversionRate = 2/80;
            } else if (currency1 === 'rupees' && currency2 === 'yen') {
                conversionRate = 3/80;
            } else {
              conversionRate = 1; // Default conversion rate
            }
            setResultCurrency(inputCurrency * conversionRate);
          }
          console.log(resultCurrency)
    }

    useEffect(() => {
       convertCurrency()
      }, [currency1, currency2, inputCurrency]);
  return (
    <div>
        <h3>currency Converter</h3>
        <input type='text' placeholder='selectCurrency' onChange={changeHandler} value={inputCurrency}></input>
        <select onChange={currencySetHandler1} value={currency1}>
            <option value="rupees">Rupees</option>
            <option value="dollar">Dollar</option>
            <option value="pounds">Pounds</option>
            <option value="yen">Yen</option>
        </select>
        <h3>to convert</h3>
        <input type='text' placeholder='selectCurrency' value={resultCurrency}></input>
        <select onChange={currencySetHandler2}  value={currency2}>
            <option value="rupees">Rupees</option>
            <option value="dollar">Dollar</option>
            <option value="pounds">Pounds</option>
            <option value="yen">Yen</option>
        </select>
        <button onClick={convertCurrency}>currencyconvert</button>
        {resultCurrency}
    </div>
  )
}

export default CurrencyConverter