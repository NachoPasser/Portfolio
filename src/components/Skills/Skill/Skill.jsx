import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Skill({src, name}) {
  return (
    <Flex flexDir={'column'} alignItems={'center'} justify={'center'} w={'100%'}>
        <Image src={src} w={'64px'}/>
        <Text fontSize={'16px'} fontWeight={600}>{name}</Text>
    </Flex>
  )
}

export default Skill