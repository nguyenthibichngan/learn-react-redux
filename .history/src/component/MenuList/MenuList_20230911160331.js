import { MenuList } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuList difficulty="Low" />
      <MenuList difficulty="Medium" />
      <MenuList difficulty="High" />
      <MenuList difficulty="Insane" />
    </div>
  );
}
