import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { TravelRAll } from "./Components/Pages-Travel/Travel-R/Travel-R-All";
import { TravelVAll } from "./Components/Pages-Travel/Travel-V/Travel-V-All";
import { TravelHAll } from "./Components/Pages-Travel/Travel-H/Travel-H-All";
import { TravelMAll } from "./Components/Pages-Travel/Travel-M/Travel-M-All";
import {
  GorGalamus,
  LacMontagnon,
  LacdÔo,
  LacGloriette,
  CirGavanie,
  LaclOule,
  LacEstom,
} from "./Components/Pages-Travel/Travel-R/Pages-RT";
import {
  Oeschinensee,
  Aareschlucht,
  Klausenpass,
} from "./Components/Pages-Travel/Travel-V/Pages-VT";

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
        <Route path="/LacÔo" element={<LacdÔo />} />
        <Route path="/GorgeGalamus" element={<GorGalamus />} />
        <Route path="/LacGloriettes" element={<LacGloriette />} />
        <Route path="/CirqGavarnie" element={<CirGavanie />} />
        <Route path="/LacOule" element={<LaclOule />} />
        <Route path="/LacEstom" element={<LacEstom />} />
        <Route path="/Oeschinensee" element={<Oeschinensee />} />
        <Route path="/Aareschlucht" element={<Aareschlucht />} />
        <Route path="/Klausenpass" element={<Klausenpass />} />
      </Routes>
    </div>
  );
}

export default App;
