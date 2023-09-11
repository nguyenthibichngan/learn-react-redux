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
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  };

  //console.log("Is hovered ? ", isHovered);
  return (
    <div
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to: {props.difficulty}
    </div>
  );
};
