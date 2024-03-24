import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Friends from './Friends'

function App() {
  function clickHandler(){
    alert('Button Clicked');
  }
  const clickHandler2 = () => alert('Clicked-2');
  
  const handlerClick2 = (num) =>{
    alert(num + num)
  }
  return (
    <>
      <h2 style={{borderBottom: '2px solid lightgray'}}>React-Core-Concepts2</h2>
      <Friends></Friends>
      <Team></Team>
      <button onClick={clickHandler}>click me</button>
      <button onClick={clickHandler2}>click2</button>
      <button onClick={() => alert('Button 3 Clicked')}>click3</button>
      <button onClick={() => handlerClick2(10)}>click4</button>
    </>
  )
}

export default App
