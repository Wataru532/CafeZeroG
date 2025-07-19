import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SolarSystem } from "./pages/SolarSystem/SolarSystem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/solarsystem" element={<SolarSystem />}/>
      </Routes>
    </div>
  )
}

export default App
