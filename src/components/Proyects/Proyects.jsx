import React, { useContext, useState } from 'react'
import { Flex, Text, Grid, useMediaQuery, Button} from '@chakra-ui/react'
import { LanguageContext } from '../../context/LanguageContext'
import HenryAsk from './Proyects/HenryAsk'
import DogsApp from './Proyects/DogsApp'
import OnDrive from './Proyects/OnDrive'
import ProductosAI from './Proyects/ProductosAI'

function Proyects() {
  const {texts} = useContext(LanguageContext)
  const smallerThan1468 = useMediaQuery('(max-width: 1468px)')
  const [active, setActive] = useState('Henry Ask')
  const experiencies = ['Productos AI', 'Henry Ask', 'On Drive', 'Dogs App']
  const showActive = () => {
    switch(active){
      case 'Productos AI':
        return <ProductosAI/>
      case 'Henry Ask':
        return <HenryAsk/>
      case 'On Drive':
        return <OnDrive/>
      case 'Dogs App':
        return <DogsApp/>
    }
    return 
  }
  return (
    <Flex id='proyects' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'} pt='80px' backgroundColor={'#233554'} color={'white'} >
      <Text fontSize={'24px'} w={{base: '95%', lg: '50%'}} borderBottom={'1px solid #00fff7'} pb={2}>{texts.proyects} 💾</Text>
      <Flex w={{base: '95%', lg: '50%'}} color={'white'} flexDir={{base: 'column', md: 'row'}}>
        <Flex  flexDir={{base: 'row', md: 'column'}} display={'none'} >
            {experiencies.map((i, id) => 
            <Button 
            key={id}
            padding={'10px'}
            margin={'2px'} 
            borderRadius={'3px 3px 1px 1px'} 
            backgroundColor={active === i ? '#2b4066' : '#233554'} 
            sx={{outline: "none !important"}} 
            _hover={{backgroundColor: '#2b4066'}} 
            borderLeft={active === i ? '3px solid #00fff7' : ''}
            onClick={() => setActive(i)}
            w={'115px'}>
            {i}
            </Button>)}
        </Flex>
        <Flex marginLeft={{base: 0, md: 10}} >
          {showActive()}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Proyects