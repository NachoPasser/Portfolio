import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex background={'#00fff7'} flexDir={{base: 'column', md:'row'}} alignItems='center' padding={'50px'} justify='space-around' gap={5}>
        <Flex display={{base: 'none', md: 'flex'}} flexDir='column' fontSize={'36px'} color='white' fontWeight={600} justify='flex-start' align={'flex-start'}>
            <Text>Ignacio</Text>
            <Text>Passerini</Text>
            <Text>Terranova</Text>
        </Flex>
        <Flex flexDir='column'>
            <Text color='white'>© Ignacio Passerini.</Text>
            <Text color='white'>Todos los derechos reservados</Text>
        </Flex>
        <Flex flexDir='column'>
            <Text color='white' fontWeight={600}>Portfolio creado con</Text>
            <Flex align={'center'} justify='space-around'>
                <Box background={'white'} padding={2} borderRadius='50px'>
                    <Image src={'/Skills/react.png'} w={'24px'} h='24px'/>
                </Box>
                <Box background={'white'} padding={2} borderRadius='50px'>
                    <Image src={'/Skills/chakraui.png'} w={'24px'} h='24px'/>
                </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer