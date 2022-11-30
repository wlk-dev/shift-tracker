import Cookie from "js-cookie"
import { createContext, useContext, useState } from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {

    const [appState, setAppState] = useState({userData : {}});

    const logout = () => {
        Cookie.remove("auth-token")
    }

    return (
        <AppContext.Provider value={{ appState, setAppState, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }