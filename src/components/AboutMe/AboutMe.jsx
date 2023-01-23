import React from 'react'
import { Flex, Text, Image, Button } from '@chakra-ui/react'
import me from '/AboutMe/me.png'
import { Link } from 'react-scroll'

function AboutMe() {
  return (
    <Flex id='aboutme' as='section' flexDir='column' justify={'center'} align='center' gap={5} height='100vh'>
        <Text fontSize={'24px'}>Sobre mí 👨‍💻</Text>
        <Flex flexDir={{base: 'column', md: 'row'}} justify={'center'} align='center' gap={5} w={{base: '95%', lg: '85%'}} maxW={'880px'}>
          <Image src={me} w={{base: '220px', md:'350px'}} h={'auto'} alt="" borderRadius={'20px'}/>
          <Flex flexDir='column' justify={'center'} align='center' gap={5}>
            <Text>Soy Ignacio, tengo 20 años y vivo en Argentina, Buenos Aires. Comencé mi recorrido por la programación durante mi carrera en ingeniería en computación y ahora soy un Desarrollador Full Stack graduado de SoyHenry.</Text>
            <Text>Me apasiona el Backend, área donde disfruto de la manipulación de datos, priorizando que sea segura, rápida y escalable.</Text>
            <Button border={'1px solid #080808'} _hover={{backgroundColor: '#080808', color:'#FCFBFE'}} onClick={() => window.open('https://drive.google.com/file/d/1jNYv8kmJJUOIOfNWZDZ89yaw13-zgDGA/view', '_blank')}>Descargar CV</Button>
            <Text>Siempre estoy aprendiendo alguna tecnología o concepto. Actualmente estoy profundizando <Link to='learning' smooth duration={'500ms'}><Text as='span' color={'#00fff7'} textDecoration='underline' _hover={{cursor: 'pointer'}}>en...</Text></Link></Text>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default AboutMe