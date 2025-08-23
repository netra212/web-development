import './App.css'
import { useFetchUrl, usePostTitle } from './hooks/useFetch';
import { useCounter } from './hooks/useCounter';
import { useEffect, useState } from 'react';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/Debounce';

// useState: store a state variable, re-render a component when the variable changes.
// useEffect: Run a effect whenever a dependency changes.
// CustomHooks:

// main component.
function App() {
  const { count, increaseCount } = useCounter;
  const postTitle = usePostTitle();

  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetchUrl("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  // usePrev Hooks understanding.
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  if (loading) {
    return <div>
      Loading.....!
    </div>
  }

  // Implementing Debouncing.
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 200);

  function change(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    // expensive operation.
    // fetch.
    console.log("Expensive operation.");
  }, [debouncedValue]);

  return (
    <>
      <div>
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>
        {
          JSON.stringify(finalData)
        }
        <br>
        </br>
        <p>{state}</p>
        <button onClick={() => {
          setState(function (curr) {
            return curr + 1;
          })
        }}>Click Me</button>
        <p>The previous value was {prev}</p>

        <input type="text" onChange={debouncedFn} />
      </div>
    </>
  )
}

export default App;
