import ConvertForm from "./convertForm";
import ResultForm from "./resultForm";

import { FormContainer } from "./form.style";
import { useForm } from "./useForm";

const Form = () => {
  const { isResult, setIsResult } = useForm();
  return (
    <FormContainer>
      {isResult ? (
        <ResultForm stateToConvert={setIsResult} />
      ) : (
        <ConvertForm stateIsConverted={setIsResult} />
      )}
    </FormContainer>
  );
};

export default Form;
