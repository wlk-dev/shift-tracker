import AllEmpTL from "../components/AllEmpTL"
import Header from "../components/Header";
import { useAppContext } from "../utils/AppContext"
import { useEffect, useState } from "react"

function Schedule() {

    const [myData, setMyData] = useState({ data: {} })
    const [ready, setReady] = useState(false)
    const { appState } = useAppContext();

    useEffect(() => {
        const getShifts = async () => {
          const query = await fetch(`/api/shift/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
    
          const qResult = await query.json()
    
          setMyData({ data: { ...qResult.payload } })
          setReady(true)
        }
    
        if (appState.userData._id !== undefined) {
          getShifts()
        }
      }, [appState])

    return (
        <div>
            <Header/>
            <AllEmpTL data={myData}/>
        </div>
    )
}

export default Schedule;