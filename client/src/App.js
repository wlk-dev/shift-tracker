import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useAppContext } from "./utils/AppContext"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PageNotFound from "./pages/404"
import AllEmpTL from "./pages/AllEmpTL"
import EmpTL from "./pages/EmpTL"
import './App.css';

function App() {
  const {setAppState} = useAppContext()

  const navigate = useNavigate()
  const location = useLocation();

  const checkForValidUser = async () => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()
    if (checkResult && checkResult.result === "success") {
      setAppState({userData : checkResult.payload})
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
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/schedule" element={<AllEmpTL />} />
      <Route exact path="/empschedule" element={<EmpTL />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>

  );
}

export default App;
