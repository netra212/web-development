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

export default App
