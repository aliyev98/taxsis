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
import VacanciesPage from "./pages/social/VacanciesPage";
import EventsPage from "./pages/social/EventsPage";
import TendersPage from "./pages/social/TendersPage";
import CustomCalculator from "./pages/social/CustomCalculator";
import CurrencyPage from './pages/social/CurrencyPage';
import VatSearch from './pages/social/VatSearch';
import IndividualProfile from "./pages/social/IndividualProfile";


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
        <Route path="/groups/:id" element={<GroupFeed />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/tenders" element={<TendersPage />} />
        <Route path="/calculator" element={<CustomCalculator />} />
        <Route path="/currency" element={<CurrencyPage />} />
        <Route path="/vatSearch" element={<VatSearch />} />
        <Route path="/individualProfile" element={<IndividualProfile />} />
      </Routes>
    </div>
  )
}

export default App
