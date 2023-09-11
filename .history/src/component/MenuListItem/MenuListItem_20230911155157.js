import { useState } from "react";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const activate = () => {
    setIsHovered(true);
  };
  const deactivate = () => {
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "";
    }
  };

  //console.log("Is hovered ? ", isHovered);
  return (
    <div onMouseEnter={activate} onMouseLeave={deactivate}>
      Set to: {props.difficulty}
    </div>
  );
};
