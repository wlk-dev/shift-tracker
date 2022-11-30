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

      const [firstName, setFirstName] = useState({name: ""})

      const updateUser = async (e) =>{
        e.preventDefault()

        const update = await fetch('/api/user/:id', {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(firstName)
        })

        const updateResult = await update.json()
      }
        
        const appCtx = useAppContext();
        const state = appCtx.appState


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
                  <FormControl action='/user/:id' method='put'>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder={state.userData.name}  />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button type='submit' colorScheme='blue' mr={3}>
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