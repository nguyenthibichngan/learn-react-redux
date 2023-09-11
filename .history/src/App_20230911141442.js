import "./App.css";
import { Greetings } from "./component/Greetings";

function App() {
  return (
    <div className="App">
      <h1>Welcome Ngan</h1>
      <Greetings
        firstName={"Rachel"}
        lastName={"Green"}
        age={30}
        car={{ brand: "Viper", color: "red", speed: 200 }}
        doSomething={function () {
          console.log("Hi Ngannn");
        }}
      />
    </div>
  );
}

export default App;
