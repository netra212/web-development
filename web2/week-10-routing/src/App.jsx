import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useRef, useState } from "react";

function App() {

  return <div>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program></Class11Program>}></Route>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program></Class12Program>}></Route>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
        </Route>
      </Routes>
      Footer | Contact us
    </BrowserRouter> */}
    <SignupForm></SignupForm>
    <ClockStartAndStop></ClockStartAndStop>
  </div>
}

function Layout() {
  return <div style={{ height: "100vh", background: "green" }}>
    <Header></Header>
    <div style={{ height: "90vh", background: "red" }}>
      <Outlet></Outlet>
    </div>
    footer
  </div>
}

function ClockStartAndStop() {
  // a clock with a start and stop button.
  const [currentCount, setCurrentCount] = useState(1);
  // const [timer, setTimer] = useState(0); // yasle re-render garairako cha... so useRef. 
  const timer = useRef();

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount(count => count + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    console.log(timer);
    clearInterval(timer.current);
  }

  return <div>
    <p>Clock</p>
    {currentCount}
    <button onClick={startClock}>start</button>
    <button onClick={stopClock}>stop</button>
  </div>
}

function SignupForm() {
  // reference to a value, such that when u change the value, the component DOES NOT RE-RENDER. 
  const inputRef = useRef();

  function focusOnInput() {
    // document.getElementById("name").focus();
    inputRef.current.focus();
  }

  return <div>
    Signup form: <input ref={inputRef} id="name" type="text" />
    <input id="password" type="text" />
    <button onClick={focusOnInput}>submit</button>
  </div>
}

function Header() {
  return <div>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function ErrorPage() {
  return <div>
    Sorry page not found.
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for Class 11th
  </div>
}

function Class12Program() {

  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    NEET programs for Class 12th <br></br>
    <button onClick={redirectUser}>Go back to Landing page</button>
  </div>
}


export default App
