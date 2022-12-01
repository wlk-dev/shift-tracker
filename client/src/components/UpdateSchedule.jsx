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


function AddShift() {
  const [updateData, setUserData] = useState({startTime: "", endTime: ""})

  const addShift = async () =>{

    const update = await fetch(`/api/shift/${appState.userData._id}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData)
    })

    const updateResult = await update.json()
  }
    


  const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const buttonStyle={
      backgroundColor: '#333',
      color: 'whitesmoke',
      margin: '5px' 
    }
  
  return (
    <>
      <Button style={buttonStyle} onClick={onOpen}>Add Shift</Button>

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
              <FormLabel>Start Time</FormLabel>
              <Input ref={initialRef}
              type='datetime-local'
              name='startTime'
              value={updateData.startTime}
              onChange={(e)=> setUserData({...updateData, [e.target.name]: e.target.value})}
              />
            </FormControl>
            <FormControl  >
              <FormLabel>End Time</FormLabel>
              <Input ref={initialRef}
              type='datetime-local'
              name='endTime'
              value={updateData.endTime}
              onChange={(e)=> setUserData({...updateData, [e.target.name]: e.target.value})}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type='submit' onClick={()=>{
              addShift()
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


export default AddShift