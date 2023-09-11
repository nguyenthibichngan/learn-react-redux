import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={false}
        onClick={props.onItemClick}
        difficulty="Low"
      />
      <MenuListItem
        isSelected={false}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={false}
        onClick={props.onItemClick}
        difficulty="Hight"
      />
      <MenuListItem
        isSelected={true}
        onClick={props.onItemClick}
        difficulty="Insane"
      />
    </div>
  );
}
