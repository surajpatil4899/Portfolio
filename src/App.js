import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./PortfolioContainer/Home/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
