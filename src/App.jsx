import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import './styles/style.scss'
import SingUp from "./pages/auth/SingUp";
import Login from "./pages/auth/Login";
import TaxModule from "./pages/modules/TaxModule";
import Module from "./Module";
import Invoices from "./components/modules/tax/Invoices";
import MainPage from "./pages/social/MainPage";
import Groups from "./pages/social/Groups";
import Friends from "./pages/social/Friends";
import GroupFeed from "./pages/social/GroupFeed";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<MainPage />} />
        <Route path="/taxModule" element={<TaxModule />} />
        <Route path="/module" element={<Module />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/friends" element={<Friends />} />
        {/* <Route path="/groupFeed" element={<GroupFeed />} /> */}
        <Route path="/groups/:id" element={<GroupFeed />} />
      </Routes>
    </div>
  )
}

export default App
