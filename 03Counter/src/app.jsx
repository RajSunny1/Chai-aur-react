import { component$, useSignal } from '@builder.io/qwik'

import qwikLogo from './assets/qwik.svg'
import viteLogo from '/vite.svg'
import './app.css'

let counter = 5
const addValue = () => {
  console.log("value added",Math.random());
}
const removeValue =()=>{
  console.log("value removed",Math.random());
}

export const App = component$(() => {
 


  return (
    <>
      <h1>sunny will get the job</h1>
      <h2>Counter value: {counter}</h2>
      <button 
       onClick={addValue}
       >Add value</button>
        
      <br></br>
      <button
       onClick={removeValue}
       >remove value</button>
    </>
  )
})
