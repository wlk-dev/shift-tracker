import { AppProvider } from "./utils/AppContext";
import { ChakraProvider } from '@chakra-ui/react'
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <Home />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
