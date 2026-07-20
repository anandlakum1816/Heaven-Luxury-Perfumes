import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-[#09010f]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
