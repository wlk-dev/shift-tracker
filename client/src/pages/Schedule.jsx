import AllEmpTL from "../components/AllEmpTL"
import Header from "../components/Header";
import { useEffect, useState } from "react"

function Schedule() {

    const [myData, setMyData] = useState({ data: {} })
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const getShifts = async () => {
          const query = await fetch(`/api/shift/`, {
            method: "GET",
            headers: { 
              "Content-Type": "application/json"
            },
          })
    
          const qResult = await query.json()
          setMyData({ data: { ...qResult.payload } })
          setReady(true)
        }
    
        getShifts()
      }, [])

    return (
        <div>
          { ready === true && (
            <>
              <Header/>
              <AllEmpTL data={myData}/>
            </>
          )}
        </div>
    )
}

export default Schedule;