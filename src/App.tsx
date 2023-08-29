import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["React", "Angular"]} />
    </div>
  );
}

export default App;
