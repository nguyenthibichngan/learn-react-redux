import { useState } from "react";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div>Set to: {props.difficulty}</div>;
};
