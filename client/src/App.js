import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useAppContext } from "./utils/AppContext"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PageNotFound from "./pages/404"
import Schedule from "./pages/Schedule"
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
<<<<<<< HEAD
    <ChakraProvider>
      <AppProvider>
        <BrowserRouter>
=======
>>>>>>> a2a170e18158e28ceddbe11bca544db93401b988
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
<<<<<<< HEAD
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>

=======
>>>>>>> a2a170e18158e28ceddbe11bca544db93401b988
  );
}

export default App;
