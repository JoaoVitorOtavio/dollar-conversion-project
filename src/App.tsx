import Header from "./components/header";
import Form from "./components/form";
import graphImage from "../src/assets/Graph.png";
import {
  MoneyImageBackground,
  GraphImage,
  ContentContainer,
} from "./styles/global";

function App() {
  return (
    <>
      <MoneyImageBackground>
        <GraphImage src={graphImage} />
      </MoneyImageBackground>
      <ContentContainer>
        <Header />
        <Form />
      </ContentContainer>
    </>
  );
}

export default App;

