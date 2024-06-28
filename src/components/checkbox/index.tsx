import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  ContainerCheckbox,
  CheckboxLabel,
} from "./checkbox.style";

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

export default RoundCheckbox;
