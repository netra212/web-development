import { useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(100);

  return <div style={{ background: "gray", borderRadius: 10, margin: 10, padding: 10, height: 210, width: 350 }}>
    <CurrentCount></CurrentCount>
    <Increase setCount={setCount}></Increase><br />
    <Decrease setCount={setCount}></Decrease>
  </div>
}

function CurrentCount({ count }) {
  return <div>
    {count}
  </div>
}
function Increase({ setCount }) {
  function increase() {
    setCount(count => count + 1);
  }
  return <div style={{ backgroundColor: "green", borderRadius: 10, margin: 10, padding: 10 }}>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease({ setCount }) {
  function decrease() {
    setCount(count => count - 1);
  }
  return <div style={{ backgroundColor: "green", borderRadius: 10, margin: 10, padding: 10 }}>
    <button onClick={decrease} style={{ backgroundColor: "red" }}>Decrease</button>
  </div>
}

export default App
