import ContactRow from "../components/ContactRow"
import { useState } from "react"
import { useAppContext } from "../utils/AppContext";
import { TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot } from '@chakra-ui/react'

const Contact = () =>{


    // const allUsers = await fetch('/api/user/', {
    //     method: 'GET',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify()
    // })

    return(
        <>
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Phone Number</Th>
                <Th isNumeric>Email</Th>
            </Tr>
            </Thead>
                <ContactRow/>
        </Table>
        </TableContainer>
        </>
    )
}

export default Contact