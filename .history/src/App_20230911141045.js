import logo from "./logo.svg";
import "./App.css";
import { Greetings } from "./component/Greetings";

function App() {
  return (
    <div className="App">
      <h1>Welcome Ngan</h1>
      <Greetings firstName={"Rachel"} lastName=["Green"] />
    </div>
  );
}

export default App;
