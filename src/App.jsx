import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function AppContent() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/register",
    "/forgot-password",
  ];

  const hideNavbarAndFooter = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09010f]">
      <ScrollToTop />

      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Products />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Pages */}

        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;