import { useState, createContext, useContext } from 'react';

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light></Light>
      </BulbProvider>
      <Parent />
    </div>
  )
}

function Light() {
  return <div>
    <LightBulb></LightBulb>
    <LightSwitch></LightSwitch>
  </div>
}

// bulbOn is a prop to the LightBulb component. 
function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

// bulbOn and setBulbOn is a prop to the LightBulb component.
function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn(!currentState)
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}

// Context API to manage the state. 
const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{ count, setCount }}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}


export default App
