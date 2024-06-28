import { styled } from "styled-components";

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
