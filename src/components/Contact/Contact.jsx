import { Flex, Text, Input, Box, Button, Textarea, Link, keyframes, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function Contact() {
  const toast = useToast()
  const shake = keyframes`
    10%, 90% {
      transform: translate3d(-2px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  `
  const [animation, setAnimation] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const validateFields = () => {
    let error = { name: '', email: '', subject: '', message: '' }
      let disabled = false
      
      if(!values.name.length){
        disabled = true
        error.name = '*Campo requerido'
      }
      else if (values.name.length < 3) {
        disabled = true
        error.name = '*Minimo 3 caracteres'
      }

      if(!values.email.length){
        disabled = true
        error.email = '*Campo requerido'
      }
      else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        disabled = true
        error.email = '*Email no valido'
      }
      
      if (values.subject.length > 998) {
        disabled = true
        error.subject = '*Maximo 998 caracteres'
      }
      
      if(!values.message.length){
        disabled = true
        error.message = '*Campo requerido'
      }
      else if(values.message.length < 10 ){
        disabled = true
        error.message = '*Minimo 10 caracteres'
      }
  
      setDisabled(disabled)
      setError(error)
  }

  const handleSubmit = () => {
    validateFields()
    if(!disabled && mounted){
      const public_key = import.meta.env.VITE_PUBLIC_KEY
      emailjs.send('gmail', 'template', values, public_key)
      .then(() => toast({
        title: `¡Gracias por contactarme ${values.name}!`,
        description: "Te responderé lo más pronto posible!",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top'
      }))
      .catch(() => toast({
        title: `Ocurrio un error inesperado 😢`,
        description: "Vuelve a intentarlo.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      }))
    } else{
      setAnimation(true)
    }
  }

  useEffect(() => {
    if(mounted){  
      validateFields()
    } else{
      setMounted(true)
    }
  }, [values])

  return (
    <Flex id={'contact'} flexDir='column' align='center' justify={'center'} h='100vh' gap={5} pt={{base: '180px', sm: '120px', md: '0px'}}>
      <Text fontSize={'24px'}>Contáctame ☎️</Text>
      <Text w='95%'>Me encuentro buscando una oportunidad como desarrollador Backend. Tienes una propuesta?</Text>
      <Flex flexDir={{base: 'column', md: 'row'}} gap={3} w={{base: '85%', md: '95%'}} maxW='750px'>
        <Flex flexDir={'column'} gap={3} w='100%' align='center'>

          <Flex flexDir={'row'} align='center' justify={'space-between'} gap='2rem' w={{base: '100%', sm: '330px'}}>
            <Flex flexDir={{base: 'column', sm: 'row'}} align='flex-start' justify={'left'} gap={{base: 1, sm: 2}}>
              <Text color='#00fff7'>Nro. de telefono:</Text>
              <Text>+549112168-8479</Text>
            </Flex>
            <Link href='https://wa.me/5491121688479' isExternal>
              <Box className='hover' border={'1px solid black'} borderRadius='50px' padding={'5px'}>
              <FaWhatsapp 
              className='hover'
              size={25}
              stroke='currentColor'
              fill='currentColor'
              />
              </Box>
            </Link>
          </Flex>
          <Flex flexDir={'row'} align='center' justify={'space-between'} gap='2rem' w={{base: '100%', sm: '330px'}}>
            <Flex flexDir={{base: 'column', sm: 'row'}} align='flex-start' justify={'left'} gap={{base: 1, sm: 2}}>
              <Text color='#00fff7'>Github:</Text>
              <Text>NachoPasser</Text>
            </Flex>
            <Link href='https://github.com/NachoPasser' isExternal>
              <Box className='hover' border={'1px solid black'} borderRadius='50px' padding={'5px'}>
              <FaGithub 
              className='hover'
              size={25}
              stroke='currentColor'
              fill='currentColor'/>
              </Box>
            </Link>
          </Flex>
          <Flex flexDir={'row'} align='center' justify={'space-between'} gap='2rem' w={{base: '100%', sm: '330px'}}>
            <Flex flexDir={{base: 'column', sm: 'row'}} align='flex-start' justify={'left'} gap={{base: 1, sm: 2}}>
              <Text color='#00fff7'>LinkedIn:</Text>
              <Text>in/ignacio-passerini</Text>
            </Flex>
            <Link href='https://www.linkedin.com/in/ignacio-passerini/' isExternal>
              <Box className='hover' border={'1px solid black'} borderRadius='50px' padding={'5px'}>
              <FaLinkedin 
              className='hover'
              size={25}
              stroke='currentColor'
              fill='currentColor'/>
              </Box>
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir='column' gap={3} w='100%'>
          <Text>O escribime por acá...</Text>
          <Flex flexDir={'column'}>
            <Text textAlign={'left'}>Nombre</Text>
            <Input borderBottom={'1px solid #00fff7'} borderRadius='0px' 
            outline={'none'} 
            _focus='none'
            _hover="none"
            _focusVisible='none'
            textAlign={'left'}
            paddingStart='none'
            value={values.name}
            onChange={(e) => setValues({...values, name: e.target.value})}/>
            <Text color='red' textAlign={'left'}>{error.name}</Text>
          </Flex>
          <Flex flexDir={'column'}>
            <Text textAlign={'left'}>Email</Text>
            <Input borderBottom={'1px solid #00fff7'} borderRadius='0px' 
            outline={'none'} 
            _focus='none'
            _hover="none"
            _focusVisible='none'
            textAlign={'left'}
            paddingStart='none'
            value={values.email}
            onChange={(e) => setValues({...values, email: e.target.value})}/>
            <Text color='red' textAlign={'left'}>{error.email}</Text>
          </Flex>
          <Flex flexDir={'column'}>
            <Text textAlign={'left'}>Asunto</Text>
            <Input borderBottom={'1px solid #00fff7'} borderRadius='0px' 
            outline={'none'} 
            _focus='none'
            _hover="none"
            _focusVisible='none'
            textAlign={'left'}
            paddingStart='none'
            value={values.subject}
            onChange={(e) => setValues({...values, subject: e.target.value})}/>
            <Text color='red' textAlign={'left'}>{error.subject}</Text>
          </Flex>
          <Flex flexDir={'column'}>
            <Text textAlign={'left'}>Mensaje</Text>
            <Textarea borderBottom={'1px solid #00fff7'} borderRadius='0px' 
            outline={'none'} 
            _focus='none'
            _hover="none"
            _focusVisible='none'
            textAlign={'left'}
            paddingStart='none'
            maxH='150px'
            value={values.message}
            onChange={(e) => setValues({...values, message: e.target.value})}/>
            <Text color='red' textAlign={'left'}>{error.message}</Text>
          </Flex>
          <Button border={'1px solid #00fff7'} fontSize={'18px'} _hover={{background: '#00fff7', color: 'white'}} onClick={handleSubmit} w={'150px'} animation={animation ? `${shake} 1s forwards` : ''} onAnimationEnd={() => setAnimation(false)}>Enviar</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact