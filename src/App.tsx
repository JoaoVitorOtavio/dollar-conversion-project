import Header from "./components/header";
import Form from "./components/form";
import graphImage from "../src/assets/Graph.png";

function App() {
  return (
    <>
      <Header />
      <Form />
      <div className="moneyImageBackground">
        <img className="graphImage" src={graphImage} />
      </div>
    </>
  );
}

export default App;

