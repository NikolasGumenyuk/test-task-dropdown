import React from "react";
import { User } from "../../models/Interfaces";

interface Props {
  data: User;
  isSelected: boolean;
}

const UserOption = ({ data: { name, surname, image }, isSelected }: Props) => {
  const initials = name[0] + surname[0];
  return (
    <option value={name} style={isSelected ? { backgroundColor: "red" } : {}}>
      {`${name} ${surname} - ${initials}`}
    </option>
  );
};

export default UserOption;
