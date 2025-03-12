import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import './styles/style.scss'
import SingUp from "./pages/auth/SingUp";
import Login from "./pages/auth/Login";
import Feed from "./pages/social/Feed";
import Test from './Test'
import Panel from "./pages/social/Panel";


function App() {

  const comments = [
    {
      id: 1,
      text: "Bu harika bir gönderi!",
      replies: [
        { id: 2, text: "Kesinlikle katılıyorum!", parentId: 1 },
        { id: 3, text: "Harika içerik!", parentId: 1 },
      ],
    },
    {
      id: 4,
      text: "Bunu daha önce duymamıştım!",
      replies: [{ id: 5, text: "Aynen ben de ilk kez görüyorum.", parentId: 4 }],
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/test" element={<Test comment={comments} />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </div>
  )
}

export default App
