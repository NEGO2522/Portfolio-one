import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Skills from "./Pages/Skills";


function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>
    </div>
  );
}

export default App;
