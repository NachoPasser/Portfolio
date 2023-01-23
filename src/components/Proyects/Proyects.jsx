import React from 'react'
import { Flex, Text, Image, Grid, useMediaQuery} from '@chakra-ui/react'
import { FaGithub} from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

function Proyects() {
  const smallerThan1468 = useMediaQuery('(max-width: 1468px)')
  return (
    <Flex id='proyects' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'} pt={smallerThan1468[0] ? {base: 40} : 0}>
      <Text fontSize={'24px'}>Proyectos 💾</Text>
      <Grid gridTemplateColumns={{base:'repeat(auto-fill, minmax(300px, 1fr))', md: 'repeat(auto-fill, minmax(400px, 1fr))'}} rowGap={20} w={{base: '95%', lg: '85%'}} columnGap={5} justifyItems='center'>
        {/* Henry Ask */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'} w='fit-content'>
          <Image src='/Proyects/HenryAsk.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} />
          <Text fontSize={'18px'} fontWeight={600}>Henry Ask</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Flex align={'center'} justify='center'  className='hover' gap={1}>
              <FaGithub
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Codigo</Text>
            </Flex>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <AiOutlineYoutube
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Exposicion</Text>
            </Flex>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <BiLinkExternal
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Demo</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* PI */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/PI.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'0% 100%'} />
          <Text fontSize={'18px'} fontWeight={600}>Dogs App</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Flex align={'center'} justify='center'  className='hover' gap={1}>
              <FaGithub
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Codigo</Text>
            </Flex>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <BiLinkExternal
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Demo</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* On Drive */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/OnDrive.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'100% 0%'}/>
          <Text fontSize={'18px'} fontWeight={600}>On Drive</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Flex align={'center'} justify='center'  className='hover' gap={1}>
              <FaGithub
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Codigo</Text>
            </Flex>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <AiOutlineYoutube
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>Exposicion</Text>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Proyects