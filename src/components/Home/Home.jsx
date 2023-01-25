import React, {useContext} from 'react'
import {Heading, Flex, Button, Text, Image, keyframes} from '@chakra-ui/react'
import arrow from '/Home/arrow.png'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { LanguageContext } from '../../context/LanguageContext'

const upAndDown = keyframes`
0%   { transform: translateY(0); }
50%  { transform: translateY(5px); }
100% { transform: translateY(0); }
`

function Home() {
  const { texts } = useContext(LanguageContext)
  return (
    <Flex as='section' id='home' minH='100vh' flexDirection={'column'} justify='center' mt={'72px'}>
        <Flex flexDir={'column'} align='center' gap={5}>
            <Flex flexDir={'column'} gap={2} w='fit-content' align={'center'}>
                <Heading as={'h1'} size='4xl' fontWeight={600} lineHeight='1.1' color={'#00fff7'} textAlign={{base: 'center', md: 'left', lg: 'left', xl: 'left', '2xl': 'left'}}>Ignacio Passerini</Heading>
                <Flex flexDir='column' w={'fit-content'} gap={5}>
                    <Heading as={'h2'} size='lg' fontWeight={600} textAlign={{base: 'center', md: 'left', lg: 'left', xl: 'left', '2xl': 'left'}} justifySelf='flex-start'>{texts.homeRol}</Heading>
                    <Flex justify={'space-between'} alignItems='center'>
                        <a href="https://www.linkedin.com/in/ignacio-passerini/" target="_blank">
                          <FaLinkedin
                          className='hover'
                          size={30}
                          stroke='currentColor'
                          fill='currentColor'
                          />
                        </a>
                        <Link to='contact' smooth duration={500}>
                          <Button background={'#FCFBFE'} border='1px solid #00fff7' _hover={{background: '#00fff7', color:'#FCFBFE'}} color='#00fff7' w={'fit-content'}>{texts.homeButton}</Button>
                        </Link>
                        <a href="https://github.com/NachoPasser" target="_blank">
                          <FaGithub
                          className='hover'
                          size={30}
                          stroke='currentColor'
                          fill='currentColor'
                          />
                        </a>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir={'column'} alignItems='center' >
                <Text>{texts.homeSlice}</Text>
                <Image src={arrow} alt="" position={'relative'} objectFit={'contain'} w={'16px'} h={'16px'} animation={`${upAndDown} infinite 1s`}/>
            </Flex>
      </Flex>
    </Flex>
  )
}

export default Home