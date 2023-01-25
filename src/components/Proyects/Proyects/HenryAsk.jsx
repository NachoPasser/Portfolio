import { 
    Flex, 
    Text, 
    Image, 
    Grid, 
    Link, 
    Button, 
    useMediaQuery, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure
} from '@chakra-ui/react'
import React, {useContext} from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import { FaGithub} from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import Slider from './CustomSlider/CustomSlider'

function HenryAsk() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {texts} = useContext(LanguageContext)
    return (
        <>
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'} w='fit-content'>
            <Image src='/Proyects/HenryAsk/Home.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} />
            <Text fontSize={'18px'} fontWeight={600}>Henry Ask</Text>
            <Flex align={'center'} justify='center' gap={3}>
                <Link href='https://github.com/PedroMtz8/HenryAsk' isExternal _hover={{textDecoration:'none'}}>
                <Flex align={'center'} justify='center'  className='hover' gap={1}>
                    <FaGithub
                    size={30}
                    stroke='currentColor'
                    fill='currentColor'
                    />
                    <Text >{texts.proyectsCode}</Text>
                </Flex>
                </Link>
                <Link href='https://www.youtube.com/watch?v=we7yBrXE4Kk' isExternal _hover={{textDecoration:'none'}}>
                <Flex align={'center'} justify='center' className='hover' gap={1}>
                    <AiOutlineYoutube
                    size={30}
                    stroke='currentColor'
                    fill='currentColor'
                    />
                    <Text>{texts.proyectsVideo}</Text>
                </Flex>
                </Link>
                <Link href='https://henry-ask.vercel.app/' isExternal _hover={{textDecoration:'none'}}>
                <Flex align={'center'} justify='center' className='hover' gap={1}>
                    <BiLinkExternal
                    size={30}
                    stroke='currentColor'
                    fill='currentColor'
                    />
                    <Text>{texts.proyectsDemo}</Text>
                </Flex>
                </Link>
            </Flex>
            <Button textColor={'#00fff7'} background='#FCFBFE' border='1px solid #00fff7' _hover={{background: '#00fff7', color: 'white'}} onClick={onOpen}>Ver más detalle</Button>
        </Flex>
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent w={{base: '98%', sm: '95%'}} h='95%' maxW={'none'} >
          <ModalHeader/>
          <ModalCloseButton _hover={{ color: "#00fff7" }} />
          <ModalBody paddingInline='0' pt='20px'>
          <Slider sliderData={["/Proyects/HenryAsk/LandingPage.png", "/Proyects/HenryAsk/Login.png", "/Proyects/HenryAsk/Home.png"]} isOpen={isOpen}/>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HenryAsk