import { useState } from "react";
import "./App.css";
import { AgeCounter } from "./component/AgeCounter";
import { Greetings } from "./component/Greetings";
import { Car } from "./component/Car/Car";
import { Greeting } from "./component/Greeting/Greeting";
import { DisplayDifficulty } from "./component/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./component/MenuListItem/MenuList";

function App() {
  const [movie, setMovie] = useState("Lord of the ring");

  function updateMovie() {
    setMovie("Fight club");
    console.log(movie);
  }

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

      <AgeCounter />

      <button onClick={updateMovie}>{movie}</button>

      <Car />
      <Greeting />

      {/* <DisplayDifficulty difficulty="Low" /> */}
      <MenuList />
    </div>
  );
}

export default App;
