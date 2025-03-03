import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import './styles/style.scss'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
