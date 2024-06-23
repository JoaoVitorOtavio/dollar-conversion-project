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
    dolValue,
    setDolValue,
    stateTax,
    setStateTax,
    handleCheckboxChange,
    selectedCheckbox,
  } = useForm();
  return (
    <FormContainer>
      <FormContentContainer>
        <InputContentContainer>
          <FormInputContainer>
            <BoldTypography>Dólar</BoldTypography>
            <FormInput value={dolValue} />
          </FormInputContainer>
          <FormInputContainer>
            <BoldTypography>Taxa do estado</BoldTypography>
            <FormInput value={stateTax} />
          </FormInputContainer>
        </InputContentContainer>
        <div>
          <BoldTypography>Tipo de compra</BoldTypography>
          <CheckboxContentContainer>
            <RoundCheckbox
              label="Dinheiro"
              checked={selectedCheckbox === "checkbox1"}
              onChange={() => handleCheckboxChange("checkbox1")}
            />
            <RoundCheckbox
              label="Cartão"
              checked={selectedCheckbox === "checkbox2"}
              onChange={() => handleCheckboxChange("checkbox2")}
            />
          </CheckboxContentContainer>
        </div>
        <div>
          <Button>
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
