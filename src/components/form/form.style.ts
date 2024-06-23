import { styled } from "styled-components";
import { NumericFormat } from "react-number-format";

export const BoldTypography = styled.b`
  color: #2e3742;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 450;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0 8px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledCheckboxProps {
  checked: boolean;
}

export const StyledCheckbox = styled.label<StyledCheckboxProps>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.checked ? "#4caf50" : "#ccc")};
  background-color: white;
  position: relative;
  cursor: pointer;
  transition: all 150ms;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 13px;
    background-color: ${(props) => (props.checked ? "#4caf50" : "white")};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 150ms;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

export const FormContainer = styled.div`
  max-width: 500px;
`;

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 105px 0 0 64px;
`;

export const InputContentContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled(NumericFormat)`
  margin-right: 24px;
  border: 1px solid #d6e0ea;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 8px 4px #ececed;
  width: 168px;
  height: 56px;
  margin-top: 8px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #2e3742;
`;

export const CheckboxContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`;

export const Button = styled.button`
  width: 149px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #008b57;
  background-color: #8c9cad;
  color: #fff;

  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  &.active {
    &:hover {
      filter: contrast(85%);
    }

    background-color: #00ab63;
    cursor: pointer;
  }
`;

export const ButtonLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
