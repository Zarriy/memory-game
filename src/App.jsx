import React, { useContext } from "react";
import "./App.css";
import Loading from "./loading";
import Home from "./Home";
import { customCtx } from "./context";
import Confetti from "react-confetti";

function App() {
  const { loading, win } = useContext(customCtx);

  return (
    <div className="App">
      {win && <Confetti />}
      {loading && <Loading />}
      {!loading && <Home />}
    </div>
  );
}

export default App;
