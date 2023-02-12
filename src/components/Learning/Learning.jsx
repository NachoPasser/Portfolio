import { Flex, Text, Image, Box, Container} from '@chakra-ui/react'
import React, {useContext} from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Learning() {
  const { texts } = useContext(LanguageContext)
  SwiperCore.use([Autoplay])
  return (
    <Flex id='learning' as='section' flexDir='column' justify={'center'} align='center' gap={5} w='100%' minH={'100vh'}>
        <Text fontSize={'24px'}>{texts.Learning} 📚</Text>
        <Flex flexDir={{base: 'column', md: 'row'}} mt='10' w='85%' justify={'center'} align={{base: 'center', md:'initial'}} h='450px'>
          <Flex minW={{base: '220px', sm: '320px', md: '380px', lg: '400px'}} maxW={{base: '220px', sm: '320px', md: '380px', lg: '400px'}} minH={{base: '220px', md: 'auto'}} position={'relative'} align='center' justify={'center'}>
              <Image pos='absolute' src={'student.png'} w={{base: '200px', sm: '220px', md: '300px'}} left={{base: '0', sm: '20px', md: 0}}/>
            <Flex width={'300px'} h='150px' position={'absolute'} top={{base:'-80px', sm: '-90px', md: 0}} right={{base:'-95px', sm: '-50px', md: -10}} align='center' justify={'center'} transform={{base: 'scale(65%)', sm: 'scale(80%)', md: 'none'}} backgroundImage={'bubble2.png'} backgroundRepeat={'no-repeat'} backgroundPosition='center' backgroundSize={'250px'}>
              <Container width={'100px'} position='relative' left={'15px'}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1600: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide key={0}>
                    <Image src={'/Skills/nestjs.png'} w={'60px'} position='relative' top={'3px'}/>
                  </SwiperSlide>
                  {/* <SwiperSlide key={1}>
                    <Image src={'/Skills/mongodb2.png'} w={'150px'} transform='scale(1.2, 1.2)'/>
                  </SwiperSlide> */}
                </Swiper>
              </Container>
            </Flex>
          </Flex>
          <Flex flexDir={'column'} rowGap={5} align='center' justify={'center'} minW={{md: '365px', lg: '500px'}} maxW={{md: '370px', lg: '500px'}}>
            <Text fontSize={'20px'}>{texts.LearningP1} <Text as='span' color='#00fff7'>{texts.LearningP2}</Text>.</Text>
            <Text fontSize={'20px'}>{texts.LearningP3} <Text as='span' color='#00fff7'>{texts.LearningP4}</Text></Text>
          </Flex>
        </Flex>
    </Flex>
  )
}

export default Learning