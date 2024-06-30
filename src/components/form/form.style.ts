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

  @media (max-width: 805px) {
    max-width: none;
    width: 100%;
  }
`;

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 105px 0 0 64px;

  @media (max-width: 805px) {
    align-items: center;
    margin: 50px 0 25px 0;
  }
`;

export const InputContentContainer = styled.div`
  display: flex;
  margin-bottom: 32px;

  @media (max-width: 805px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 805px) {
    align-items: center;
  }
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

  @media (max-width: 805px) {
    margin: 0 auto;
  }

  @media (max-width: 550px) {
    width: 60%;
    &.input-margin_bottom {
      margin-bottom: 50px;
    }
  }
`;

export const CheckboxContainer = styled.div`
  @media (max-width: 805px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CheckboxContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;

  @media (max-width: 805px) {
    flex-direction: column;
  }
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

  @media (max-width: 555px) {
    text-align: center;
  }
`;

export const ResultValue = styled.span`
  font-size: 64px;
  font-weight: 600;
  line-height: 80px;
  color: #00ab63;

  @media (max-width: 555px) {
    text-align: center;
    font-size: 50px;
  }

  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

export const ResultInfosDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  @media (max-width: 805px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const ResultInfoContainer = styled.div``;

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
