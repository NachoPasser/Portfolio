import React, { useContext } from 'react'
import { Flex, Text, Grid, useMediaQuery} from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'
import HenryAsk from './Proyects/HenryAsk'
import DogsApp from './Proyects/DogsApp'
import OnDrive from './Proyects/OnDrive'

function Proyects() {
  const {texts} = useContext(LanguageContext)
  const smallerThan1468 = useMediaQuery('(max-width: 1468px)')
  return (
    <Flex id='proyects' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'} pt='80px' >
      <Text fontSize={'24px'}>{texts.proyects} 💾</Text>
      <Grid gridTemplateColumns={{base:'repeat(auto-fill, minmax(300px, 1fr))', md: 'repeat(auto-fill, minmax(400px, 1fr))'}} rowGap={20} w={{base: '95%', lg: '85%'}} columnGap={5} justifyItems='center'>
        <HenryAsk/>
        <DogsApp/>
        <OnDrive/>
      </Grid>
    </Flex>
  )
}

export default Proyects