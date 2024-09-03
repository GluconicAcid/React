import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 15;

  const addValue = () => {
    // counter += 1;
    // if (counter >= 35) {
    //   counter = 35;
    // }
    // setCounter(counter);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }

  const removeValue = () => {
    counter -= 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>body count</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
