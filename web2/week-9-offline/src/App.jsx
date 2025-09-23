import React, { Component, useState, useEffect } from 'react';

const App = () => {

  const [isComponentShown, setIsComponentShown] = useState(0);

  const todos = [{
    title: "Go To Gym",
    done: false
  }, {
    title: "Eat Food",
    done: true
  }]

  const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done}></Todo>)

  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
        <div>
          {[
            <Todo key={1} title={"Go To Gym"} done={true}></Todo>,
            <Todo key={2} title={"Eat food"} done={false}></Todo>
          ]}
        </div>
      </Card>
      <MyComponent></MyComponent>
      <MyComponent1></MyComponent1>

      <ErrorBoundary>
        <Card1></Card1>
      </ErrorBoundary>
      <Card2></Card2>
      <MyComponent2></MyComponent2>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      {children}
    </div>
  );
};

function Todo({ title, done }) {
  return <div>
    {title} - {done ? "Done!" : "Not done"}
  </div>
}

function MyComponent() {
  return (
    <div style={{ background: "red", borderRadius: 4, padding: 4, margin: 10 }}>
      Hello, World
    </div>
  )
}

// Class based vs functional components

// class ClassCounter extends Component {

//   state = { count: 0 };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render(){
//     return (
//       <div>
//         <p>Count: {this.count.state}</p>
//         <butto onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }

// }

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// 

function MyComponent1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Error Boundary.
function Card1() {

  throw new Error("Something went wrong")
  return <div style={{ background: "red", borderRadius: 20, margin: 10, padding: 10 }}>
    Hi there
  </div>
}

function Card2() {
  return <div style={{ background: "gray", borderRadius: 20, margin: 10, padding: 10 }}>
    Hello
  </div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ background: "red", borderRadius: 20, padding: 20, margin: 10, padding: 10 }}>
        Something went wrong
      </div>
    }
    return this.props.children;
  }
}

// Fragment: In React, a component can return a single parent element, but it can contain multiple children within that single parent
const MyComponent2 = () => {
  return (
    <>
      <h1>hello</h1>
      <p>World</p>
    </>
  )
}

export default App;
