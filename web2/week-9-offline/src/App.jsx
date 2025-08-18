import { useState } from "react"

// App Component.
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh"}}>
      <ToogleMessage></ToogleMessage>
      <ToogleMessage></ToogleMessage>
      <ToogleMessage></ToogleMessage>
    </div>
  )
}

const ToogleMessage = () => {
  // const [isVisible, setIsVisible] = useState(false); // Defining a new state variable. 

  // let [isVisible, setIsVisible] = useState();
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>
        Increased Count
      </button>
      {notificationCount}
    </div>
  );
};

// function PostComponent({ name, subtitle, time, image, description }) {
//   return <div style={style}>
//     <div style={{ display: "flex" }}>
//       <img src={image} style={{
//         width: 30,
//         height: 30,
//         borderRadius: 20
//       }} />
//       <div style={{ fontSize: 10, marginLeft: 10 }}>
//         <b>{name}</b>
//         <div>{subtitle}</div>
//         {(time !== undefined) ?
//           <div style={{ display: "flex" }}>
//             <div>{time}</div>
//             <img src="clock_image.png " style={{ width: 20, height: 12 }} />
//           </div>: null 
//         }
//       </div>
//     </div>
//     <div style={{ fontSize: 12 }}>
//       {description}
//     </div>
//   </div>
// }

// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

/* <PostComponent
            name={"netra"}
            subtitle={"follower count"}
            time={"3m ago"}
            image={"100xDevs.png"}
            description={"How to get hired in 2024 ? I lost my job in 2023, this is the roadmap I followed to get a job."}
          ></PostComponent>
          <br />
        </div>
        <div>
          <PostComponent
            name={"yagya"}
            subtitle={"Promoted"}
            time={"4m ago"}
            image={"100xDevs.png"}
            description={"What to know to to win big ? Check but how these folks won $6000 in bounties. "}
          ></PostComponent>
          <br /> */

export default App


