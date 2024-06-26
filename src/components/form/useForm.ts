import { useState, useEffect } from "react";
import { NumberFormatValues } from "react-number-format";
import api from "../../services/api";

export const useForm = () => {
  useEffect(() => {
    async function fetchUsdExchange() {
      const { data } = await api.get("/USD-BRL");

      setUsdExchangeValue(Number(data.USDBRL.bid));
    }
    fetchUsdExchange();
  }, []);

  const [stateTaxValue, setStateTaxValue] = useState<number | undefined>(
    undefined
  );
  const [dolQty, setDolQty] = useState<number | undefined>(1);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(
    "dinheiro"
  );

  const [usdExchangeValue, setUsdExchangeValue] = useState<number | undefined>(
    undefined
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckbox(id);
  };

  const handleInputValueChange = (
    values: NumberFormatValues,
    stateToSet: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => {
    const { floatValue } = values;
    stateToSet(floatValue !== undefined && floatValue >= 0 ? floatValue : 1);
  };

  const handleDisabledButton = (): boolean => {
    if (dolQty === undefined || stateTaxValue === undefined) return true;

    const dolValueIsValid = dolQty >= 0;
    const stateTaxIsValid = stateTaxValue >= 0;

    if (dolValueIsValid && stateTaxIsValid) return false;

    return true;
  };

  const convertUsdToBrl = (): number => {
    if (!dolQty || !stateTaxValue || !usdExchangeValue) return 0;

    const IOF_MONEY = 0.011;
    const IOF_CARD = 0.064;

    if (selectedCheckbox === "dinheiro") {
      const convertedResult =
        (dolQty + dolQty * (stateTaxValue / 100)) *
        (usdExchangeValue + dolQty * IOF_MONEY);

      return convertedResult;
    }

    const convertedResult =
      (dolQty + dolQty * (stateTaxValue / 100) + dolQty * IOF_CARD) *
      usdExchangeValue;

    return convertedResult;
  };

  return {
    stateTaxValue,
    setStateTaxValue,
    dolQty,
    setDolQty,
    handleCheckboxChange,
    selectedCheckbox,
    handleInputValueChange,
    handleDisabledButton,
    convertUsdToBrl,
  };
};
