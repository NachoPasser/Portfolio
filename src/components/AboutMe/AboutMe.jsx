import React, {useContext} from 'react'
import { Flex, Text, Image, Button } from '@chakra-ui/react'
import me from '/AboutMe/me.png'
import { Link } from 'react-scroll'
import { LanguageContext } from '../../context/LanguageContext'

function AboutMe() {
  const { texts } = useContext(LanguageContext)
  return (
    <Flex id='aboutme' as='section' flexDir='column' justify={'center'} align='center' gap={5} minH='100vh' backgroundColor={'#233554'} color={'white'}>
        <Text fontSize={'24px'}>{texts.navbarAboutMe} 👨‍💻</Text>
        <Flex flexDir={{base: 'column', md: 'row'}} justify={'center'} align='center' gap={5} w={{base: '95%', lg: '85%'}} maxW={'880px'} borderTop={'1px solid #00fff7'} pt={10}>
          <Image src={me} w={{base: '220px', md:'350px'}} h={'auto'} alt="" borderRadius={'20px'}/>
          <Flex flexDir='column' justify={'center'} align='center' gap={5}>
            <Text>{texts.aboutMeP1}</Text>
            <Text>{texts.aboutMeP2}</Text>
            <a href={texts.CV} target={'_blank'}>
              <Button border={'1px solid #080808'} _hover={{backgroundColor: '#080808', color:'#FCFBFE'}} color={'black'} background={'#FCFBFE'}>{texts.aboutMeButton}</Button>
            </a>
            {/* <Text>{texts.aboutMeP3} <Link to='learning' smooth duration={500}><Text as='span' color={'#00fff7'} textDecoration='underline' _hover={{cursor: 'pointer'}}>{texts.aboutMeP4}</Text></Link></Text> */}
          </Flex>
        </Flex>
    </Flex>
  )
}

export default AboutMe