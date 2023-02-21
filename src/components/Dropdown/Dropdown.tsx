import * as React from "react";
import styles from "./Dropdown.module.css";

interface Props {
  handleChange: (event: string) => void;
  currentValue: string;
  children?: React.ReactNode;
}

const Dropdown = ({ handleChange, currentValue, children }: Props) => {
  return (
    <select
      className={styles.dropdown}
      name="countries"
      value={currentValue}
      onChange={(event) => handleChange(event.target.value)}
    >
      <option value="" disabled hidden>
        Select an Option
      </option>
      {children}
    </select>
  );
};

export default Dropdown;
