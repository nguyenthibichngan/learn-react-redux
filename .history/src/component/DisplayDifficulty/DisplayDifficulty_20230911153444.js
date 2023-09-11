export function DisplayDifficulty(props) {
  return (
    <div>
      {props.difficuty
        ? `Difficulty set to ${props.difficuty}`
        : "No difficulty set"}
    </div>
  );
}
