import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'

function Learning() {
  return (
    <Flex id='learning' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'}>
        <Text fontSize={'24px'}>Aprendiendo 🧠</Text>
        <Flex flexDir={'column'} alignItems={'center'} justify={'center'} w={'100px'} border='1px solid black' borderRadius={'20px'}>
          <Image src={'/Skills/mongodb.png'} w={'64px'}/>
          <Text fontSize={'16px'} fontWeight={600}>MongoDB</Text>
        </Flex>
        <Text fontSize={'20px'}>Ando profundizando en temas más avanzados.</Text>
        <Text fontSize={'20px'}>Ya he trabajado con ella anteriormente 👇</Text>
    </Flex>
  )
}

export default Learning