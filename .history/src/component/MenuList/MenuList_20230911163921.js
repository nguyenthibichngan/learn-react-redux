import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={true}
        onClick={props.onItemClick}
        difficulty="Low"
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={props.difficulty === "Hight"}
        onClick={props.onItemClick}
        difficulty="Hight"
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        onClick={props.onItemClick}
        difficulty="Insane"
      />
    </div>
  );
}
