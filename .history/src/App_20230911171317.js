import { useState } from "react";
import "./App.css";
import { AgeCounter } from "./component/AgeCounter";
import { Greetings } from "./component/Greetings";
import { Car } from "./component/Car/Car";
import { Greeting } from "./component/Greeting/Greeting";
import { DisplayDifficulty } from "./component/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./component/MenuList/MenuList";

function App() {
  const [movie, setMovie] = useState("Lord of the ring");

  function updateMovie() {
    setMovie("Fight club");
    console.log(movie);
  }

  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");
  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  // Loops
  const colors = ["red", "blue", "green", "yellow"];
  const squareList = [];
  for (const color of colors) {
    squareList.push(
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: color,
          display: "inline-block",
          alignItems: "center",
        }}
      ></div>
    );
  }

  const result = [{ name: "Harry" }, { name: "Lisa" }].map(appendPotterToName);
  function appendPotterToName(item) {
    return { name: item.name + "Potter" };
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
      <h1>Welcome your React difficulty</h1>
      <div className="workspace">
        <MenuList onItemClick={onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>

      <br />
      <div>{squareList}</div>

      <br />
      <div>{result}</div>
    </div>
  );
}

export default App;
