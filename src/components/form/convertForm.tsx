import { FaArrowRightArrowLeft } from "react-icons/fa6";

import RoundCheckbox from "../checkbox";

import {
  BoldTypography,
  FormInput,
  FormInputContainer,
  FormContentContainer,
  InputContentContainer,
  CheckboxContentContainer,
  ConvertButtonLabel,
  ConvertButton,
  CheckboxContainer,
} from "./form.style";
import { useForm } from "./useForm";

interface ConvertFormProps {
  stateIsConverted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConvertForm: React.FC<ConvertFormProps> = ({ stateIsConverted }) => {
  const {
    stateTaxValue,
    setStateTaxValue,
    handleCheckboxChange,
    selectedCheckbox,
    handleInputValueChange,
    handleDisabledButton,
    dolQty,
    setDolQty,
    convertUsdToBrl,
  } = useForm();

  return (
    <FormContentContainer>
      <InputContentContainer>
        <FormInputContainer>
          <BoldTypography>Dólar</BoldTypography>
          <FormInput
            className="input-margin_bottom"
            isAllowed={(values) => {
              const floatValue = values.floatValue ?? 1;
              return floatValue >= 1;
            }}
            id="dolValueInput"
            value={dolQty}
            onValueChange={(e) => handleInputValueChange(e, setDolQty)}
            prefix="$ "
            thousandSeparator=","
            decimalSeparator="."
            decimalScale={2}
          />
        </FormInputContainer>
        <FormInputContainer>
          <BoldTypography>Taxa do estado</BoldTypography>
          <FormInput
            isAllowed={(values) => {
              const floatValue = values.floatValue ?? 0;
              return floatValue >= 0 && floatValue <= 100;
            }}
            placeholder="0%"
            id="stateTaxValueInput"
            value={stateTaxValue}
            onValueChange={(e) => handleInputValueChange(e, setStateTaxValue)}
            suffix="%"
            decimalSeparator="."
            decimalScale={2}
          />
        </FormInputContainer>
      </InputContentContainer>
      <CheckboxContainer>
        <BoldTypography>Tipo de compra</BoldTypography>
        <CheckboxContentContainer>
          <RoundCheckbox
            label="Dinheiro"
            checked={selectedCheckbox === "dinheiro"}
            onChange={() => handleCheckboxChange("dinheiro")}
          />
          <RoundCheckbox
            label="Cartão"
            checked={selectedCheckbox === "cartao"}
            onChange={() => handleCheckboxChange("cartao")}
          />
        </CheckboxContentContainer>
      </CheckboxContainer>
      <div>
        <ConvertButton
          onClick={() => convertUsdToBrl(stateIsConverted)}
          disabled={handleDisabledButton()}
          className={!handleDisabledButton() ? "active" : ""}
        >
          <ConvertButtonLabel>
            <FaArrowRightArrowLeft />
            &nbsp; Converter
          </ConvertButtonLabel>
        </ConvertButton>
      </div>
    </FormContentContainer>
  );
};

export default ConvertForm;
