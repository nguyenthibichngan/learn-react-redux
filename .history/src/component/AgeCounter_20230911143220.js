export function AgeCounter(props) {
  let age = 30;

  function increaseAge() {
    age++;
  }

  return (
    <div>
      <button onClick={increaseAge}>Increase age</button>
      <p>You are {age} years old</p>
    </div>
  );
}
