import { useState } from "react";
import Footer from "./components/Footer";
import Intraday from "./components/Intraday";
import Investment from "./components/Investment";

function App() {
  const [toggleIntra, setToggleIntra] = useState(false);
  const [toggleInvest, setToggleInvest] = useState(true);

  const tog = () => {
    setToggleIntra((prev) => !prev);
    setToggleInvest((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>Pivot Point Calculator</h1>
      <p>-bharathkapril</p>
      <button onClick={tog}>{toggleIntra ? "Investment" : "Intraday"}</button>
      {toggleIntra && <Intraday />}
      {toggleInvest && <Investment />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
