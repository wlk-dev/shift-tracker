import React from "react"
import {
Tr,
Tbody,
Td} from '@chakra-ui/react'

const TableData = (props) =>{

    const { fname, lname, contactNum, email } = props

    return(
        <Tbody>
        <Tr>
            <Td>{fname} {lname}</Td>
            <Td>{contactNum}</Td>
            <Td isNumeric>{email}</Td>
        </Tr>
        </Tbody>
    )
}

export default TableData