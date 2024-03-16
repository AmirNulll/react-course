
import Todo from "./Components/Todo";



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
