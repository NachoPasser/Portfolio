import React, { useState, useEffect } from 'react'
import { Button, Flex, Image, keyframes } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

let count = 0
function CustomSlider({sliderData, flexSize, isOpen}) {
    const [index, setIndex] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [mounted, setMount] = useState(false)
    const [images, setImages] = useState(null)


    const fadeIn = keyframes`
      from {
        opacity: 0;
      }
      to {
      opacity: 1;
    }
    `

    const next = () => {
      if(!animating){
        count = (count + 1) % sliderData.length
        setIndex(count)
        setAnimating(true)
      }
      if(!mounted) setMount(true)
    }
    
    const prev = () => {
      if(!animating){
        count = (index + sliderData.length - 1) % sliderData.length
        setIndex(count)
        setAnimating(true)
      }
      if(!mounted) setMount(true)
    }
    
    const onAnimationEnd = () => {
      setAnimating(false)
    }

    const changeSlide = (id) => {
      if(!animating){
        count = id
        setIndex(id)
        setAnimating(true)
      }
      if(!mounted) setMount(true)
    }

    useEffect(() => {
      if(isOpen){
        var timer = setInterval(function(){
          next()
        }, 5000)
      }

      return () => {
        clearInterval(timer)
      }
      
    }, [isOpen])

  return (
    <Flex align={'center'} justifyContent='center' w='100%'position={'relative'} userSelect='none'>
      <Flex position={'relative'} justify={'center'} align='center'>
        <Flex justify={'center'} align='center' position={'absolute'} left='10px' background={'white'} borderRadius={'50px'} border='1px solid #00fff7' onClick={prev} zIndex='100' _hover={{cursor: animating ? 'default' : 'pointer'}}>
          <MdOutlineKeyboardArrowLeft stroke='#FFFFFF' fill='#000000' size={'30px'}/>
        </Flex>
        <Flex flex={flexSize[index]} >
          {sliderData?.map((img, i) => 
          <Image src={img} w={'100%'} verticalAlign='middle' position={i !== index ? 'absolute' : 'relative'} opacity={i !== index ? 0 : 1} transition='all 1s' onTransitionEnd={onAnimationEnd}  minW={'300px'} minH={'150px'} />)}
        </Flex>
        <Flex justify={'center'} align='center' position={'absolute'}  right='10px' background={'white'} borderRadius={'50px'} border='1px solid #00fff7' onClick={next} zIndex='100' _hover={{cursor: animating ? 'default' : 'pointer'}}>
          <MdOutlineKeyboardArrowRight stroke='#FFFFFF' fill='#000000' size={'30px'}/>
        </Flex>
        <Flex position={'absolute'} bottom={3} gap={2}>
          {sliderData.map((_, id) => 
          <Button key={id} border={index === id ? '1px solid #00fff7' : '1px solid black'} w='10px' h='8px' background={index === id ? '#FCFBFE' : 'lightgrey'} _hover={{background: 'white', cursor: animating ? 'default' : 'pointer'}} onClick={() => changeSlide(id)}/>)}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CustomSlider