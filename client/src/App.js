import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PageNotFound from "./pages/404"
import AllEmpTL from "./pages/AllEmpTL"
import EmpTL from "./pages/EmpTL"
import './App.css';

function App() {
  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate()

  const checkForValidUser = async () => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()
    if (checkResult && checkResult.result === "success") {
      setAuthUser(checkResult.payload)
    } else {
      const currentPath = window.location.pathname
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
      <Route exact path="/" element={<Home authUser={authUser} />} />
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
