import s from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
}
