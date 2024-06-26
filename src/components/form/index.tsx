import { FaArrowRightArrowLeft } from "react-icons/fa6";

import {
  BoldTypography,
  FormInput,
  FormInputContainer,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  ContainerCheckbox,
  CheckboxLabel,
  FormContainer,
  FormContentContainer,
  InputContentContainer,
  CheckboxContentContainer,
  Button,
  ButtonLabel,
} from "./form.style";
import { useForm } from "./useForm";

interface RoundCheckboxProps {
  className?: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

const RoundCheckbox: React.FC<RoundCheckboxProps> = ({
  className,
  checked,
  onChange,
  label,
}) => (
  <ContainerCheckbox>
    <CheckboxLabel>{label}</CheckboxLabel>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} onClick={onChange} />
    </CheckboxContainer>
  </ContainerCheckbox>
);

const Form = () => {
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
    <FormContainer>
      <FormContentContainer>
        <InputContentContainer>
          <FormInputContainer>
            <BoldTypography>Dólar</BoldTypography>
            <FormInput
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
        <div>
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
        </div>
        <div>
          <Button
            onClick={() => convertUsdToBrl()}
            disabled={handleDisabledButton()}
            className={!handleDisabledButton() ? "active" : ""}
          >
            <ButtonLabel>
              <FaArrowRightArrowLeft />
              &nbsp; Converter
            </ButtonLabel>
          </Button>
        </div>
      </FormContentContainer>
    </FormContainer>
  );
};

export default Form;
