import React from "react"
import {
Tr,
Td} from '@chakra-ui/react'

const ContactRow = (props) =>{

    const { fname, lname, contactNum, email } = props

    return(
        <Tr>
            <Td>{fname} {lname}</Td>
            <Td>{contactNum}</Td>
            <Td isNumeric>{email}</Td>
        </Tr>
    )
}

export default ContactRow