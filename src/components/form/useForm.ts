import { useState } from "react";
import { NumberFormatValues } from "react-number-format";

export const useForm = () => {
  const [stateTaxValue, setStateTaxValue] = useState<number | undefined>(
    undefined
  );
  const [dolValue, setDolValue] = useState<number | undefined>(1);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(
    "dinheiro"
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckbox(id);
  };

  const handleInputValueChange = (
    values: NumberFormatValues,
    stateToSet: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => {
    const { floatValue } = values;
    stateToSet(floatValue || 1);
  };

  const handleDisabledButton = (): boolean => {
    if (dolValue === undefined || stateTaxValue === undefined) return true;

    const dolValueIsValid = dolValue >= 0;
    const stateTaxIsValid = stateTaxValue >= 0;

    if (dolValueIsValid && stateTaxIsValid) return false;

    return true;
  };

  return {
    stateTaxValue,
    setStateTaxValue,
    dolValue,
    setDolValue,
    handleCheckboxChange,
    selectedCheckbox,
    handleInputValueChange,
    handleDisabledButton,
  };
};
