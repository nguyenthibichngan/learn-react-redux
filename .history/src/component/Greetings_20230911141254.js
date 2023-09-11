export function Greetings(props) {
  console.log(props);
  return (
    <div>
      Hi {props.firstName} {props.lastName} you are {props.age}{" "}
    </div>
  );
}
