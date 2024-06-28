import {
  FormContentContainer,
  BackButton,
  ResultTitle,
  ResultValue,
  ResultInfosDescriptionContainer,
  ResultInfoDescriptionValues,
  ResultInfoDescription,
} from "./form.style";
import { FaArrowLeft } from "react-icons/fa6";

interface ResultFormProps {
  stateToConvert: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultForm: React.FC<ResultFormProps> = ({ stateToConvert }) => {
  const storageResult: string | null = localStorage.getItem("convertedResult");

  const {
    convertedValue,
    selectedCheckbox,
    stateTaxValue,
    usdExchangeValue,
  }: {
    convertedValue: number;
    selectedCheckbox: string;
    stateTaxValue: number;
    usdExchangeValue: number;
  } = JSON.parse(storageResult!);

  const formattedConvertedValue = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedValue);

  return (
    <FormContentContainer>
      <BackButton onClick={() => stateToConvert(false)}>
        <FaArrowLeft />
        Voltar
      </BackButton>
      <ResultTitle>O resultado do cálculo é</ResultTitle>
      <ResultValue>R$ {formattedConvertedValue}</ResultValue>
      <ResultInfosDescriptionContainer>
        <div>
          <ResultInfoDescription>
            Compra no {selectedCheckbox} e taxa de
          </ResultInfoDescription>
          <ResultInfoDescriptionValues>
            &nbsp;{stateTaxValue}%
          </ResultInfoDescriptionValues>
        </div>
        <div>
          <ResultInfoDescription>Cotação do dólar:</ResultInfoDescription>
          <ResultInfoDescriptionValues>
            &nbsp;$1,00 = R$ {usdExchangeValue.toFixed(2)}
          </ResultInfoDescriptionValues>
        </div>
      </ResultInfosDescriptionContainer>
    </FormContentContainer>
  );
};

export default ResultForm;
