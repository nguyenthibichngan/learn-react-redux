export function Greetings(props) {
  console.log(props);
  props.age = 99;

  return (
    <div>
      Hi {props.firstName} {props.lastName} you are {props.age}
    </div>
  );
}
