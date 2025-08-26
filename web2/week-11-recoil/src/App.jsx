import { useEffect, useState, memo } from 'react'
import "./App.css"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atom/counter'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Button></Button>
        <Counter></Counter>
        <IsEven></IsEven>
      </RecoilRoot>
    </div>
  )
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setTimeout(count => count + 2);
  }

  function decrease() {
    setTimeout(count => count - 2);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
