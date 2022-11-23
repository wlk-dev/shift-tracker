import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {

    const [ appState, setAppState ] = useState({ userData : {}});

    const getUser = () => {
      setAppState({ ...appState, userData : {isManager : true}})
    }
    useEffect(() => {
        getUser()
    }, [appState.user])


    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }