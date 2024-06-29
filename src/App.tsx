import Header from "./components/header";
import Form from "./components/form";
import graphImage from "../src/assets/Graph.png";
import { MoneyImageBackground, GraphImage } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Form />
      <MoneyImageBackground>
        <GraphImage src={graphImage} />
      </MoneyImageBackground>
    </>
  );
}

export default App;

