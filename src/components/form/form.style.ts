import { styled } from "styled-components";
import { NumericFormat } from "react-number-format";

export const BoldTypography = styled.b`
  color: #2e3742;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
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

export const ConvertButton = styled.button`
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

export const ConvertButtonLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  cursor: pointer;
  border: 1px solid #d7e0eb;
  padding: 16px;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 8px 4px #ececed;
  width: 120px;
  height: 56px;
  margin-bottom: 32px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #2e3742;

  background-color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultTitle = styled.span`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  color: #45505e;
  margin-bottom: 8px;
`;

export const ResultValue = styled.span`
  font-size: 64px;
  font-weight: 600;
  line-height: 80px;
  color: #00ab63;
`;

export const ResultInfosDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const ResultInfoDescriptionValues = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  color: #6e7e90;
`;

export const ResultInfoDescription = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  color: #6e7e90;
`;
