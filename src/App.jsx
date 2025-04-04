import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import './styles/style.scss'
import SingUp from "./pages/auth/SingUp";
import Login from "./pages/auth/Login";
import Feed from "./pages/social/Feed";
import TaxModule from "./pages/modules/TaxModule";
import Module from "./Module";
import DateRangePicker from "./DateRangePicker";
import Invoices from "./components/modules/tax/Invoices";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/taxModule" element={<TaxModule />} />
        <Route path="/module" element={<Module />} />
        <Route path="/calendar" element={<DateRangePicker />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </div>
  )
}

export default App
