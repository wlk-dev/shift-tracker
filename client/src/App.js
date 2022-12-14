import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useAppContext } from "./utils/AppContext"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PageNotFound from "./pages/404"
import Schedule from "./pages/Schedule"
import Contact from './pages/Contact'
import './App.css';

function App() {
  const { setAppState } = useAppContext()

  const navigate = useNavigate()
  const location = useLocation();

  const checkForValidUser = async () => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()
    if (checkResult && checkResult.result === "success") {
      setAppState({ userData: checkResult.payload })
    } else {
      const currentPath = location.pathname
      if (!["/login", "/signup"].includes(currentPath)) {
        navigate("/login")
      }
    }
  }

  useEffect(() => {
    checkForValidUser()
  }, [])

  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
  );
}

export default App;
