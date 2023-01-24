import { Flex, Text, Image } from '@chakra-ui/react'
import React, {useContext} from 'react'
import { LanguageContext } from '../../context/LanguageContext'

function Learning() {
  const { texts } = useContext(LanguageContext)
  return (
    <Flex id='learning' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'}>
        <Text fontSize={'24px'}>{texts.Learning} 📚</Text>
        <Flex flexDir={'column'} alignItems={'center'} justify={'center'} w={'100px'} border='1px solid black' borderRadius={'20px'}>
          <Image src={'/Skills/mongodb.png'} w={'64px'}/>
          <Text fontSize={'16px'} fontWeight={600}>MongoDB</Text>
        </Flex>
        <Text fontSize={'20px'}>{texts.LearningP1}</Text>
        <Text fontSize={'20px'}>{texts.LearningP2}</Text>
    </Flex>
  )
}

export default Learning