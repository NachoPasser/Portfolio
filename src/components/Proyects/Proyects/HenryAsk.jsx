import { 
    Flex, 
    Text, 
    Image, 
    Box,
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
import CustomSlider from './CustomSlider/CustomSlider'
import ProyectSkill from './ProyectSkill/ProyectSkill'

function HenryAsk() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {texts} = useContext(LanguageContext)
    const [largerThan756px] = useMediaQuery('(min-width: 756px)')
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
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent w={'100%'} h='fit-content' maxW={'1200px'} marginInline={{base: 2, sm: 5}} >
          <ModalHeader position={'relative'} top={2}>Henry Ask</ModalHeader>
          <ModalCloseButton _hover={{ color: "#00fff7" }} />
          <ModalBody paddingInline='0' pt='20px'>
          <CustomSlider sliderData={["/Proyects/HenryAsk/LandingPage.png", "/Proyects/HenryAsk/Login.png", "/Proyects/HenryAsk/Home.png"]} flexSize={[1.9917, 1.9741, 1.9618]} isOpen={isOpen}/>
          <Flex marginInline={'20px'} align='flex-start' justify={'center'} flexDir='column'>
            <Flex mt={2} gap={2} mb={2} align='center' justify={'flex-start'} flexWrap='wrap' >
              <ProyectSkill skill={'React'}/>
              <ProyectSkill skill={'Redux-toolkit'}/>
              <ProyectSkill skill={'ChakraUI'}/>
              <ProyectSkill skill={'Node.js'}/>
              <ProyectSkill skill={'Express'}/>
              <ProyectSkill skill={'Mongoose'}/>
              <ProyectSkill skill={'MongoDB'}/>
              <ProyectSkill skill={'Firebase'}/>
            </Flex>
            <Text textAlign={'left'}>{texts.modalHenryAskP1} <Text as={largerThan756px ? 'span' : 'p'} textAlign={'left'}>{texts.modalHenryAskP2}</Text></Text>
            <Flex align={'center'} justify='center' gap={{base: 5, md: 10}} w='100%' mt={5} fontSize={{base: '16px', md:'20px'}}>
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
          </Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default HenryAsk