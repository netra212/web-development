import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { todosAtomFamily } from './atom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
      </RecoilRoot>
    </>
  )
}

function Todo(id){
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  return (
    
  )
}
export default App
