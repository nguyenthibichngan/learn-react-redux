import { useState } from "react";

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
      <p>You are {age} years old</p>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}
