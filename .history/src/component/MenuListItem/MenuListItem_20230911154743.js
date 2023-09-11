import { useState } from "react";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  function activate() {
    setIsHovered(true);
  }
  function deactivate() {
    setIsHovered(false);
  }

  console.log("Is hover");
  return <div>Set to: {props.difficulty}</div>;
};
