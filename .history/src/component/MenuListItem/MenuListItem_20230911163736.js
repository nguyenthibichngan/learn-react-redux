import { useState } from "react";
import s from "./style.module.css";

export const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(true);

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
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  //console.log("Is hovered ? ", isHovered);

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onItemClick}
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to: {props.difficulty}
    </div>
  );
};
