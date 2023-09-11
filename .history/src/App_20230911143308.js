import "./App.css";
import { AgeCounter } from "./component/AgeCounter";
import { Greetings } from "./component/Greetings";

function App() {
  return (
    <div className="App">
      <input
        type="checkbox"
        checked
        onChange={function () {
          console.log("You clicked");
        }}
      />
      <h1>Welcome Ngan</h1>
      <Greetings
        firstName={"Rachel"}
        lastName={"Green"}
        age={101}
        car={{ brand: "Viper", color: "red", speed: 200 }}
        doSomething={function () {
          console.log("Hi Ngannn");
        }}
      />

      <br />
      <AgeCounter />
    </div>
  );
}

export default App;
