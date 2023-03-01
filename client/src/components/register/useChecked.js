import { useState } from "react";
/* Este componente es un Hook para saber si un checkbox esta chequeado o no */
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
