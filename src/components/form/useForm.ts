import { useState } from "react";

export const useForm = () => {
  const [stateTax, setStateTax] = useState("0%");
  const [dolValue, setDolValue] = useState("$ 1,00");
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(
    "checkbox1"
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckbox(id);
  };

  return {
    stateTax,
    setStateTax,
    dolValue,
    setDolValue,
    handleCheckboxChange,
    selectedCheckbox,
  };
};
