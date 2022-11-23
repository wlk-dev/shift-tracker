import { AppProvider } from "./utils/AppContext";
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import './App.css';

function App() {


  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
