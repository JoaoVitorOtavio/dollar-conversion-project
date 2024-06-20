import { useState } from "react";

export const useHeader = () => {
  const [teste, setTeste] = useState<string>("Teste primario");

  return { teste, setTeste };
};
