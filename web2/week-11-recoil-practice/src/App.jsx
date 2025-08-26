import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';
import axios from "axios";
import { useEffect } from 'react';


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // const networkNotificationCount = useRecoilValue(networkAtom);
  // const jobsCount = useRecoilValue(jobsAtom);
  // const notificationCount = useRecoilValue(notificationAtom);
  // const messagingCount= useRecoilValue(messagingAtom);

  // const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(() => {
  //   networkNotificationCount + jobsCount + notificationCount + messagingCount
  // }, [networkNotificationCount, jobsCount, notificationCount, messagingCount]);

  // -------- Hitting with Backend with axios --------
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      {/* <div>
        <button>Home</button>

        <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
        <button>Jobs ({networkCount.jobs})</button>
        <button>Messaging ({networkCount.messaging})</button>
        <button>Notification ({networkCount.notifications})</button>

        <button>Me ({totalNotificationCount})</button>
      </div> */ }

      <RecoilRoot>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
      </RecoilRoot>
    </>
  );
}

function Todo(id) {
  const currentTodo = useRecoilValue(todoAtom(id));

  return <>
    {currentTodo.title}
    {currentTodo.description}
    <br></br>
  </>
}


export default App;
