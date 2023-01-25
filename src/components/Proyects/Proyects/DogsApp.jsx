import React, {useContext} from 'react'
import { Flex, Text, Image, Grid, Link, Button, useMediaQuery, Modal, useDisclosure} from '@chakra-ui/react'
import { LanguageContext } from '../../../context/LanguageContext'
import { FaGithub} from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'


function DogsApp() {
  const {texts} = useContext(LanguageContext)
  return (
    <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/PI.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'0% 100%'} />
          <Text fontSize={'18px'} fontWeight={600}>Dogs App</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Link href='https://github.com/NachoPasser/PI-Dogs' isExternal _hover={{textDecoration:'none'}}>
              <Flex align={'center'} justify='center'  className='hover' gap={1}>
                <FaGithub
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text>{texts.proyectsCode}</Text>
              </Flex>
            </Link>
            <Link href='https://pi-dogs-ignaciopasserini.vercel.app/' isExternal _hover={{textDecoration:'none'}}>
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
          <Button textColor={'#00fff7'} border='1px solid #00fff7' _hover={{background: '#00fff7', color: 'white'}}>Ver más detalle</Button>
    </Flex>
  )
}

export default DogsApp