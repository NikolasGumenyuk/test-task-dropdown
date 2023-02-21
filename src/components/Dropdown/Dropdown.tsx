import { useState } from "react";
import { Data } from "../../models/Data";
import ListItem from "../LidstItem/ListItem";
import styles from "./Dropdown.module.css";

interface Props {
  isOpen: boolean;
  handleClose: (isOpen: boolean) => void;
  handleChange: (item: Data) => void;
  currentValue: Data;
  children?: React.ReactNode;
  data: Data[];
}

const Dropdown = ({
  isOpen,
  handleClose,
  handleChange,
  currentValue,
  data,
}: Props) => {
  // const [isOpen, setIsOpen] = useState(false);

  const currentName = currentValue.surname
    ? `${currentValue.name} ${currentValue.surname} - ${
        currentValue.name[0] + currentValue.surname[0]
      }`
    : currentValue.name;

  // const handleClick = (item: Data) => {
  //   handleChange(item);
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownBtn}
        onClick={(e) => {
          e.stopPropagation();
          handleClose(!isOpen);
        }}
      >
        {currentValue.image ? (
          <img src={currentValue.image} alt="avatar" height="100%" />
        ) : (
          ""
        )}
        {currentName}
      </button>
      {isOpen ? (
        <div className={styles.droppedArea}>
          <ul className={styles.dropdownList}>
            {data.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                handleClick={handleChange}
                isSelected={currentValue.id === item.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
