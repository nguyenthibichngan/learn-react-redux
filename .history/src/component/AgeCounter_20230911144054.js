import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  //   let age = 30;

  //   function increaseAge() {
  //     age++;
  //   }

  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <div>
      {/* <p>You are {age} years old</p> */}

      <AgeDisplay />
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}
