import Cookie from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {

    const [appState, setAppState] = useState({ userData: {} });

    const getUser = () => {
        setAppState({ ...appState, userData: { isManager: true, name: 'XXXX' } })
    }

    const logout = () => {
        Cookie.remove("auth-token")
        // window.location.href = "/login"
    }

    useEffect(() => {
        if( !appState.user ) getUser()
    }, [appState.user])


    return (
        <AppContext.Provider value={{ appState, setAppState, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }