import { useState, useEffect } from 'react'

// useEffect, dependency array, cleanups. 
function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count => count + 1);
  }

  function decrease() {
    setCount2(count => count - 1);
  }

  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}

// mounting, re-rendering, unmounting. 
function Counter(props) {
  console.log("mount");

  useEffect(function () {
    console.log("unmount");

    return function () {
      console.log("unmount");
    }
  }, []);

  useEffect(function () {
    console.log("count has changed.");

    return function(){
      console.log("cleaning inside second effect.");
    }
  }, [props.count, props.count2])

  return <div>
    Counter {props.count}<br></br>
    Counter {props.count2}<br></br>
  </div>
}

export default App
