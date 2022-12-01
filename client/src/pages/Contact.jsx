import ContactRow from "../components/ContactRow"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import { TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot, 
    grid} from '@chakra-ui/react'

const Contact = () =>{

    const [allUserData, setAllUserData] = useState(null)

    const getAllUsers = async ()=>{
        const query = await fetch('/api/user/', {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })

        const result = await query.json()
        setAllUserData({...result.payload})
    }

    useEffect(() =>{
        getAllUsers()
    },[])

    const createRow = () =>{
        return Array.from(Object.keys(allUserData)).map((key, index) => {
            return(
                <ContactRow key={index + 1} fname={allUserData[key].fname} lname={allUserData[key].lname} contactNum={allUserData[key].contactNum} email={allUserData[key].email} />
            )
        })
    }

    let row
    if(allUserData){
        row = createRow()
    }
    


    const gridStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px',
        textAlign: "center",
    }

    return(
        <>
        <Header />
        <TableContainer style={gridStyle}>
        <Table variant='striped'>
            <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Phone Number</Th>
                <Th isNumeric>Email</Th>
            </Tr>
            </Thead>
            <Tbody>
                {allUserData && (row)}
            </Tbody>
        </Table>
        </TableContainer>
        </>
    )
}

export default Contact