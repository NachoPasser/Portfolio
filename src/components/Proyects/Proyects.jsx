import React, { useContext } from 'react'
import { Flex, Text, Image, Grid, Link, useMediaQuery} from '@chakra-ui/react'
import { FaGithub} from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { LanguageContext } from '../../context/LanguageContext'

function Proyects() {
  const {texts} = useContext(LanguageContext)
  const smallerThan1468 = useMediaQuery('(max-width: 1468px)')
  return (
    <Flex id='proyects' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'} pt={smallerThan1468[0] ? {base: 40} : 0}>
      <Text fontSize={'24px'}>{texts.proyects} 💾</Text>
      <Grid gridTemplateColumns={{base:'repeat(auto-fill, minmax(300px, 1fr))', md: 'repeat(auto-fill, minmax(400px, 1fr))'}} rowGap={20} w={{base: '95%', lg: '85%'}} columnGap={5} justifyItems='center'>
        {/* Henry Ask */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'} w='fit-content'>
          <Image src='/Proyects/HenryAsk.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} />
          <Text fontSize={'18px'} fontWeight={600}>Henry Ask</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Link href='https://github.com/PedroMtz8/HenryAsk' isExternal _hover={'none'}>
              <Flex align={'center'} justify='center'  className='hover' gap={1}>
                <FaGithub
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text >{texts.proyectsCode}</Text>
              </Flex>
            </Link>
            <Link href='https://www.youtube.com/watch?v=we7yBrXE4Kk' isExternal _hover={'none'}>
              <Flex align={'center'} justify='center' className='hover' gap={1}>
                <AiOutlineYoutube
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text>{texts.proyectsVideo}</Text>
              </Flex>
            </Link>
            <Link href='https://henry-ask.vercel.app/' isExternal _hover={'none'}>
              <Flex align={'center'} justify='center' className='hover' gap={1}>
                <BiLinkExternal
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text>{texts.proyectsDemo}</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        {/* PI */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/PI.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'0% 100%'} />
          <Text fontSize={'18px'} fontWeight={600}>Dogs App</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Link href='https://github.com/NachoPasser/PI-Dogs' isExternal _hover={'none'}>
              <Flex align={'center'} justify='center'  className='hover' gap={1}>
                <FaGithub
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text>{texts.proyectsCode}</Text>
              </Flex>
            </Link>
            <Link href='https://pi-dogs-ignaciopasserini.vercel.app/' isExternal _hover={'none'}>
              <Flex align={'center'} justify='center' className='hover' gap={1}>
                <BiLinkExternal
                size={30}
                stroke='currentColor'
                fill='currentColor'
                />
                <Text>{texts.proyectsDemo}</Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        {/* On Drive */}
        <Flex flexDir={'column'} gap={5} justify='center' align={'center'}>
          <Image src='/Proyects/OnDrive.png' w={{base: '300px', md:'400px'}} h={{base: '150', md:'200px'}} objectFit={'cover'} objectPosition={'100% 0%'}/>
          <Text fontSize={'18px'} fontWeight={600}>On Drive</Text>
          <Flex align={'center'} justify='center' gap={3}>
            <Link href='https://github.com/NachoPasser/OnDrive' isExternal _hover={'none'}>
            <Flex align={'center'} justify='center'  className='hover' gap={1}>
              <FaGithub
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>{texts.proyectsCode}</Text>
            </Flex>
            </Link>
            <Link href='https://www.youtube.com/watch?v=8JYQKiN6lv4' isExternal _hover={'none'}>
            <Flex align={'center'} justify='center' className='hover' gap={1}>
              <AiOutlineYoutube
              size={30}
              stroke='currentColor'
              fill='currentColor'
              />
              <Text>{texts.proyectsVideo}</Text>
            </Flex>
            </Link>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Proyects