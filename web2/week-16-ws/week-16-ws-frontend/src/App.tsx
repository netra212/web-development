import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef;

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onerror = () => {};

    ws.close = () => {};

    ws.onopen = () => {};

    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <div>
      <input ref={useRef} type="text" placeholder="enter your name"></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
