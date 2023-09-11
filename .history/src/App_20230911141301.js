import "./App.css";
import { Greetings } from "./component/Greetings";

function App() {
  return (
    <div className="App">
      <h1>Welcome Ngan</h1>
      <Greetings firstName={"Rachel"} lastName={"Green"} age={30} />
    </div>
  );
}

export default App;
