import React from "react";
import { useState, useEffect } from "react"
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
    Input,
    Select
} from '@chakra-ui/react'


function DeleteShift() {

    const { appState } = useAppContext()
    const [shiftData, setShiftData] = useState({});
    const [ready, setReady] = useState(false);
    const [selectValue, setSelectValue] = useState(0);


    const deleteShift = async () => {
        const query = await fetch(`/api/shift/${shiftData[selectValue]._id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        })

        const qResult = await query.json()

        if (qResult.result === "success") {
            delete shiftData[selectValue]
            setShiftData(shiftData)
            window.location.reload(false);
        }
    }

    const getShift = async () => {

        const query = await fetch(`/api/shift/${appState.userData._id}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        })

        const qResult = await query.json();

        setShiftData(qResult.payload);
        setReady(true);
    }

    useEffect(() => {
        if (appState.userData._id !== undefined) {
            getShift();
        }
    }, [appState])

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const buttonStyle = {
        backgroundColor: '#333',
        color: 'whitesmoke',
        margin: '5px'
    }

    const createRow = () => {
        return Array.from(Object.keys(shiftData)).map((key, index) => {
            return (
                <option key={index} value={key} > {shiftData[key].startTime} </option>
            )
        })
    }

    let options

    if (ready) {
        options = createRow();
    }

    return (
        <>
            <Button style={buttonStyle} onClick={onOpen}>Delete Shift</Button>

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
                        <FormControl>
                            <FormLabel>Select Shift</FormLabel>
                            <Select value={selectValue} onChange={(e) => {
                                setSelectValue(e.target.value)
                                console.log(selectValue)
                            }}>
                                {ready && (options)}
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type='submit' onClick={() => {
                            deleteShift()
                            onClose()
                        }} colorScheme='red' mr={3}>
                            Delete
                        </Button>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default DeleteShift