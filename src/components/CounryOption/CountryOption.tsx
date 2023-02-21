import React from "react";
import { Country } from "../../models/Interfaces";

interface Props {
  data: Country;
  isSelected: boolean;
}

const CountryOption = ({ data: { name }, isSelected }: Props) => {
  return (
    <option style={isSelected ? { backgroundColor: "red" } : {}} value={name}>
      {name}
    </option>
  );
};

export default CountryOption;
