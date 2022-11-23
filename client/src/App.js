import { AppProvider } from "./utils/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import { ChakraProvider } from '@chakra-ui/react'
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import './App.css';

function App() {
  const [ authUser, setAuthUser ] = useState(null)

  const checkForValidUser = async() => {
    const authCheck = await fetch("/api/user/lookup")
    const checkResult = await authCheck.json()
    if( checkResult && checkResult.result === "success" ){
      setAuthUser(checkResult.payload)
    }
  }
  
  useEffect(() => {
    checkForValidUser()
  }, [])

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Home />
            <Route path="/" element={<Home authUser={ authUser } />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      
      </BrowserRouter>
    </AppProvider>

  );
}

export default App;
