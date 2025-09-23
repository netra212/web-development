import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/Plusicon";

function App() {
  return (
    <>
      <Button
        size="sm"
        startIcon={<PlusIcon size="lg"></PlusIcon>}
        variant="primary"
        text="Add Content"
      ></Button>

      <Button
        size="md"
        startIcon={<PlusIcon size="lg"></PlusIcon>}
        variant="secondary"
        text="Share"
      ></Button>
    </>
  );
}

export default App;
