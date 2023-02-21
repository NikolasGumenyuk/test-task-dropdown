import React from "react";
import { Data } from "../../models/Data";
import styles from "./ListItem.module.css";

interface Props {
  item: Data;
  handleClick: (item: Data) => void;
  isSelected?: boolean;
}

const ListItem = ({ item, handleClick, isSelected }: Props) => {
  const itemName = item.surname
    ? `${item.name} ${item.surname} - ${item.name[0] + item.surname[0]}`
    : item.name;

  return (
    <li
      className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
      onClick={(e) => {
        e.preventDefault();
        handleClick(item);
      }}
    >
      {item.image ? <img src={item.image} alt="avatar" /> : ""}
      {itemName}
    </li>
  );
};

export default ListItem;
