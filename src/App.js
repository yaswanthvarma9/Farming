import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import FarmerRegister from './components/farmerRegister';
import SupplierRegister from './components/supplierRegister';
import FarmerLogin from './components/farmerLogin';
import SupplierLogin from './components/supplierLogin';
import Navbar from './components/header/Navbar';
import NavbarFooter from './components/footer/NavbarFooter';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Navbar />} /> 
        <Route path="/footer" element={<NavbarFooter />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<FarmerLogin />} />
        <Route path="/registerfarmer" element={<FarmerRegister />} />
        <Route path="/supplier" element={<SupplierLogin/>}/>
        <Route path="/registersupplier" element={<SupplierRegister />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
