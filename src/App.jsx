import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Promo from "./Promo.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Promo />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
