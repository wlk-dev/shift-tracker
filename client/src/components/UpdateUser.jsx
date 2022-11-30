import React from "react";
import { useState } from "react"
import { useAppContext } from "../utils/AppContext";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'


function UpdateUser() {

    const [updateData, setUserData] = useState({ fname: "", lname: "", email: '', contactNum: '' })

    // TODO: add validators
    const updateUser = async () => {

        for (const key in appState.userData) {
            if (updateData[key] === "") { // if no new data is set using the modal, use the current data from appState
                updateData[key] = appState.userData[key]
                console.log()
            }
        }

        setAppState({ userData: updateData })
        setUserData({ fname: "", lname: "", email: '', contactNum: '' })

        const update = await fetch('/api/user/:id', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appState.userData)
        })

        const updateResult = await update.json()
    }

    const { appState, setAppState } = useAppContext()


    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const buttonStyle = {
        backgroundColor: '#333',
        color: 'whitesmoke',
        margin: '5px'
    }

    return (
        <>
            <Button style={buttonStyle} onClick={onOpen}>Edit Profile</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl  >
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef}
                                type='text'
                                name='fname'
                                value={updateData.fname}
                                onChange={(e) => setUserData({ ...updateData, [e.target.name]: e.target.value })}
                                placeholder={appState.userData.fname} />
                        </FormControl>
                        <FormControl  >
                            <FormLabel>Last name</FormLabel>
                            <Input ref={initialRef}
                                type='text'
                                name='lname'
                                value={updateData.lname}
                                onChange={(e) => setUserData({ ...updateData, [e.target.name]: e.target.value })}
                                placeholder={appState.userData.lname} />
                        </FormControl>
                        <FormControl  >
                            <FormLabel>Email</FormLabel>
                            <Input ref={initialRef}
                                type='email'
                                name='email'
                                value={updateData.email}
                                onChange={(e) => setUserData({ ...updateData, [e.target.name]: e.target.value })}
                                placeholder={appState.userData.email} />
                        </FormControl>
                        <FormControl  >
                            <FormLabel>Phone Number</FormLabel>
                            <Input ref={initialRef}
                                type='text'
                                name='contactNum'
                                value={updateData.contactNum}
                                onChange={(e) => setUserData({ ...updateData, [e.target.name]: e.target.value })}
                                placeholder={appState.userData.contactNum} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' onClick={() => {
                            updateUser()
                            onClose()
                        }} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default UpdateUser