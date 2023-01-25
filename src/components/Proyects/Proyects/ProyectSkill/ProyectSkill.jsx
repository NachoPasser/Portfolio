import React from 'react'
import { Button } from '@chakra-ui/react'

function ProyectSkill({skill}) {
  return (
    <Button cursor='default' border={'1px solid #00fff7'} padding={'0px 8px'} h='24px' fontSize={'12px'} background={'#FCFBFE'} color="#00fff7" _hover={{outline:'none'}} _focus={{background: '#FCFBFE'}} fontWeight={400}>{skill}</Button>
  )
}

export default ProyectSkill