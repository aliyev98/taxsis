import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import './styles/style.scss'
import SingUp from "./pages/auth/SingUp";
import Test from "./components/auth/login/Test";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
