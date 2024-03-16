import Backdrop from "./Components/Backdrop";
import Todo from "./Components/Todo";
import Modal from "./Components/Modal";
import Backdrop from "./Components/Backdrop";

function App() {
  return (
    <div>
      <h1>My todo</h1>

      <Todo text="Hello" />
      <Todo text="World" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
