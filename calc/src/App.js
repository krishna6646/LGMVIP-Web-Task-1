import React from 'react'
import { useState } from 'react';


function App() {
  const[calc,setCalc]=useState("");
  const[result,setResult]=useState("");

  const ops=['/','*','+','-','.'];

  const updatecalc = value =>{
    if(
      ops.includes(value) && calc == '' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = ()=>{
    const digits = [];
    for(let i=1;i<10;i++)
    {
      digits.push(
        <button 
        onClick={()=>{updatecalc(i.toString())}}
        key={i}>
          {i}
          </button>
      )  }
      return digits;
  }
  const calcu= ()=>{
    setCalc(eval(calc).toString());
  } 
  const deleteL=()=>{
    if (calc === ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }

  return (
    <div className='App'>
      <div className='calcu'>
          <div className='display'>
          {calc || "0"}
          </div>
          <div className='operations'>
          <button onClick={()=>{updatecalc('/')}}>/</button>
          <button onClick={()=>{updatecalc('+')}}>+</button>
          <button onClick={()=>{updatecalc('-')}}>-</button>
          <button onClick={()=>{updatecalc('*')}}>*</button>

          <button onClick={deleteL}>Del</button>
          </div>
      
      <div className='digits'>
        {createDigits()}
        <button onClick={()=>{updatecalc('0')}}>0</button>
        <button onClick={()=>{updatecalc('.')}}>.</button>
        <button onClick={calcu}>=</button>
      </div>
      </div>

    </div>
  )
}

export default App;
