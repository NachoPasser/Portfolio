import React from 'react'
import { Flex, Text, useDisclosure, Modal, ModalContent, ModalCloseButton, ModalOverlay, ModalHeader, ModalBody, Image} from '@chakra-ui/react'
import {HiMenuAlt3} from 'react-icons/hi'
import {BsSun} from 'react-icons/bs'
import {BiMoon} from 'react-icons/bi'
import './NavBar.css'
import logo from '/icon.png'

function NavBar() {
    const { isOpen, onOpen, onClose, isClosable } = useDisclosure()

    return (
        <Flex as='nav' position={'fixed'} backgroundColor='white' w='100vw' h='72px' align={'center'} zIndex='100' boxShadow={'0 2px 4px 0 rgba(0,255,247,.3)'}>
            <Image ml="24px" src={logo} w='32px' h='32px'/>
            <Flex align='center' justify={'end'} w='100vw' padding={'0 24px'} columnGap='10px' >
                <Text className='hover' fontWeight={600}>ES/EN</Text>
                <BiMoon
                    className='hover'
                    size={20}
                    stroke='currentColor'
                    fill='currentColor'
                />
                <HiMenuAlt3
                    className='hover'
                    size={24}
                    stroke='currentColor'
                    fill='currentColor'
                    onClick={onOpen}
                />
                {/* <BsSun
                    size={20}
                    stroke='currentColor'
                    fill='currentColor'
                    color={'#00fff7'}
                    className="lg:hidden cursor-pointer text-blue-600 dark:text-white"
                /> */}
            </Flex>
            {/* <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={"full"}
            >
                <ModalOverlay />
                <ModalContent background={'none'} w={{ base: "100vw", md: "90vw", lg: '80vw' }}>
                <ModalHeader></ModalHeader>
                <ModalCloseButton _hover={{ background: "tomato" }} />
                <ModalBody>
                    <Text color={'#00fff7'}>Inicio</Text>
                    <Text color={'#00fff7'}>Sobre mi</Text>
                </ModalBody>
                </ModalContent>
            </Modal> */}
        </Flex>
    )
}

export default NavBar