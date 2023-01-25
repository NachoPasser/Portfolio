import React, {useContext} from 'react'
import { Flex, Text, Image, Grid, Link, Button, useMediaQuery, Modal, useDisclosure} from '@chakra-ui/react'
import { LanguageContext } from '../../../context/LanguageContext'
import { FaGithub} from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'

function OnDrive() {
  const {texts} = useContext(LanguageContext)
  return (
    <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/OnDrive.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'100% 0%'}/>
          <Text fontSize={'18px'} fontWeight={600}>On Drive</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Link href='https://github.com/NachoPasser/OnDrive' isExternal _hover={{textDecoration:'none'}}>
            <Flex align={'center'} justify='center'  className='hover' gap={1}>
              <FaGithub
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>{texts.proyectsCode}</Text>
            </Flex>
            </Link>
            <Link href='https://www.youtube.com/watch?v=8JYQKiN6lv4' isExternal _hover={{textDecoration:'none'}}>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <AiOutlineYoutube
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>{texts.proyectsVideo}</Text>
            </Flex>
            </Link>
          </Flex>
          <Button textColor={'#00fff7'} background='#FCFBFE' border='1px solid #00fff7' _hover={{background: '#00fff7', color: 'white'}}>Ver más detalle</Button>
    </Flex>
  )
}

export default OnDrive