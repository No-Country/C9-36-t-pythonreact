import { useState } from "react";

export const useChecked = (initialState) => {
  const [checked, setChecked] = useState(initialState);

  const handleClickCheckBox = ({ target }) => {
    setChecked({
      ...checked,
      [target.name]: !checked[target.name],
    });
  };

  return [checked, handleClickCheckBox];
};
