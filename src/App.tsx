import Header from "./components/header";
import graphImage from "../src/assets/Graph.png";

function App() {
  return (
    <>
      <Header />
      <div className="moneyImageBackground">
        <img className="graphImage" src={graphImage} />
      </div>
    </>
  );
}

export default App;

