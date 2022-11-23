import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from "./utils/AppContext";

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PageNotFound from "./pages/404"
import './App.css';

function App() {
  const [authUser, setAuthUser] = useState(null)

  const checkForValidUser = async () => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()
    if (checkResult && checkResult.result === "success") {
      setAuthUser(checkResult.payload)
    }
  }

  useEffect(() => {
    checkForValidUser()
  }, [])

  return (
    <ChakraProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home authUser={authUser} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>

  );
}

export default App;
