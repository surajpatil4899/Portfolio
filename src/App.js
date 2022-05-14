import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import Contact from "./PortfolioContainer/Home/Contact"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
