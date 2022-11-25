import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { TravelRAll } from "./Components/Pages-Travel/Travel-R/Travel-R-All";
import { TravelVAll } from "./Components/Pages-Travel/Travel-V/Travel-V-All";
import { TravelHAll } from "./Components/Pages-Travel/Travel-H/Travel-H-All";
import { TravelMAll } from "./Components/Pages-Travel/Travel-M/Travel-M-All";
import { LacMontagnon } from "./Components/Pages-Travel/Travel-R/Pages-RT";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TravelRAll" element={<TravelRAll />} />
        <Route path="/TravelVAll" element={<TravelVAll />} />
        <Route path="/TravelHAll" element={<TravelHAll />} />
        <Route path="/TravelMAll" element={<TravelMAll />} />
        <Route path="/LacMontagnon" element={<LacMontagnon />} />
      </Routes>
    </div>
  );
}

export default App;
