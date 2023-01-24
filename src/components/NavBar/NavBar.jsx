import {useState, useRef, useEffect, useContext} from 'react'
import { Flex, Text, Image, keyframes, Button, Grid, GridItem} from '@chakra-ui/react'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BsSun, BsBook, BsBriefcase} from 'react-icons/bs'
import {BiMoon} from 'react-icons/bi'
import {FaRegCommentDots} from 'react-icons/fa'
import './NavBar.css'
import logo from '/icon.png'
import { Link } from 'react-scroll'
import { LanguageContext } from '../../context/LanguageContext'

function NavBar() {
    const { texts, handleLanguage, language } = useContext(LanguageContext)
    const [hidden, setHidden] = useState('none')
    const [closing, setClosing] = useState(false)
    const menu = useRef();
    const slideDown = keyframes`
        0% { transform: translateY(-100%);}
        100% { transform: translateY(0%);}
    `
    const slideUp = keyframes`
        0% { transform: translateY(0%);}
        100% { transform: translateY(-100%);}
    `
    const hideMenu = () => {
        setClosing(true)
        menu.current.addEventListener(
            "animationend",
            () => {
              setHidden('none')
            },
            { once: true }
        );
    }

    useEffect(() => {
      setClosing(false)
    }, [hidden])

    return (
        <Flex as='nav' position={'fixed'} backgroundColor='white' w='100%' h='72px' align={'center'} zIndex='100' boxShadow={'0 2px 4px 0 rgba(0,255,247,.3)'} >
            <Grid ref={menu} display={hidden} alignItems='center' justifyItems={'center'} fontSize={{base:'13px', sm:'17px'}} position={'absolute'} top='0px' w='100%' gridTemplateRows={'72px 72px'} gridTemplateColumns='repeat(3, 1fr)' backgroundColor='white' animation={!closing ? `${slideDown} 200ms forwards`: `${slideUp} 200ms forwards`} fontWeight='600' boxShadow={'0 2px 4px 0 rgba(0,255,247,.3)'} style={{scrollbarGutter: 'stable'}}>
                <GridItem gridArea={'1 / 1 / 2 / 2'}>
                    <Link to='home' smooth duration={'500ms'}>
                        <Flex className='hover' border={{base: 'none', sm:'1px solid black'}} borderRadius='50px' gap='1' padding={'0 5px'} w='fit-content' alignItems={'center'} flexDir={{base: "column", sm: 'row'}}>
                                <AiOutlineHome
                                size={20}
                                stroke='currentColor'
                                fill='currentColor'/>
                                <Text>{texts.navbarHome}</Text>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem gridArea={'1 / 2 / 2 / 3'}>
                    <Link to='aboutme' smooth duration={'500ms'}>
                        <Flex className='hover' border={{base: 'none', sm:'1px solid black'}} borderRadius='50px' gap='1' padding={'0 5px'} w='fit-content' alignItems={'center'} flexDir={{base: "column", sm: 'row'}}>
                            <AiOutlineUser
                            size={20}
                            stroke='currentColor'
                            fill='currentColor'/>
                            <Text>{texts.navbarAboutMe}</Text>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem gridArea={'1 / 3 / 2 / 4'} fontSize={'20px'} justifySelf='end' padding={'0 30px'} alignItems={'center'}>
                    <Text onClick={hideMenu} className='hover'>X</Text>
                </GridItem>
                <GridItem gridArea={' 2 / 1 / 3 / 2'} ml='0.5'>
                    <Link to='skills' smooth duration={'500ms'}>
                        <Flex className='hover' border={{base: 'none', sm:'1px solid black'}} borderRadius='50px' gap='1' padding={'0 5px'} w='fit-content' alignItems={'center'} flexDir={{base: "column", sm: 'row'}}>
                            <BsBook
                            size={20}
                            stroke='currentColor'
                            fill='currentColor'/>
                            <Text>{texts.navbarSkills}</Text>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem gridArea={'2 / 2 / 3 / 3'}  >
                    <Link to='proyects' smooth duration={'500ms'}>
                        <Flex className='hover' border={{base: 'none', sm:'1px solid black'}} borderRadius='50px' gap='1' padding={'0 5px'} w='fit-content' alignItems={'center'} flexDir={{base: "column", sm: 'row'}}>
                            <BsBriefcase
                            size={20}
                            stroke='currentColor'
                            fill='currentColor'/>
                            <Text>{texts.navbarProjects}</Text>
                        </Flex>
                    </Link>
                </GridItem>
                <GridItem gridArea={'2 / 3 / 3 / 4'} mr='0.5'>
                    <Link to='contact' smooth duration={'500ms'}>
                        <Flex className='hover' border={{base: 'none', sm:'1px solid black'}} borderRadius='50px' gap='1' padding={'0 5px'} w='fit-content' alignItems={'center'} flexDir={{base: "column", sm: 'row'}}>
                            <FaRegCommentDots
                            size={20}
                            stroke='currentColor'
                            fill='currentColor'/>
                            <Text>{texts.navBarContact}</Text>
                        </Flex>
                    </Link>
                </GridItem>
            </Grid>
            <Image ml="24px" src={logo} w='32px' h='32px'/>
            <Flex display={{base: 'flex', md: 'none'}} align='center' justify={'end'} w='100vw' padding={'0 24px'} columnGap='10px' >
                <Flex onClick={handleLanguage} _hover={{cursor: 'pointer'}}>
                    <Text fontWeight={600} color={language === 'es' ? '#00fff7' : '#000000'}>ES</Text>
                    <Text fontWeight={600}>/</Text>
                    <Text fontWeight={600} color={language === 'en' ? '#00fff7' : '#000000'}>EN</Text>
                </Flex>
                <BiMoon
                    className='hover'
                    size={20}
                    stroke='currentColor'
                    fill='currentColor'
                />
                <HiMenuAlt3
                    className={hidden === 'none' ? 'hover' : 'notPointerHover'}
                    size={24}
                    stroke='currentColor'
                    fill='currentColor'
                    onClick={() => setHidden('grid')}
                />
                {/* <BsSun
                    className='hover'
                    size={20}
                    stroke='currentColor'
                    fill='currentColor'
                /> */}
            </Flex>
            <Flex display={{base: 'none', md: 'flex'}} align='center' justify={'end'} w='100vw' padding={'0 24px'} columnGap='30px'>
                <Link to='home' smooth duration={'500ms'}>
                    <Text fontSize={'20px'} className='hover' >{texts.navbarHome}</Text>
                </Link>
                <Link to='aboutme' smooth duration={'500ms'}>
                    <Text fontSize={'20px'} className='hover'>{texts.navbarAboutMe}</Text>
                </Link>
                <Link to='skills' smooth duration={'500ms'}>
                    <Text fontSize={'20px'} className='hover'>{texts.navbarSkills}</Text>
                </Link>
                <Link to='proyects' smooth duration={'500ms'}>
                    <Text fontSize={'20px'} className='hover'>{texts.navbarProjects}</Text>
                </Link>
                <Link to='contact' smooth duration={'500ms'}>
                    <Text fontSize={'20px'} className='hover'>{texts.navBarContact}</Text>
                </Link>
                <BiMoon
                    className='hover'
                    size={20}
                    stroke='currentColor'
                    fill='currentColor'
                />
                <Flex onClick={handleLanguage} _hover={{cursor: 'pointer'}}>
                    <Text fontWeight={600} color={language === 'es' ? '#00fff7' : '#000000'}>ES</Text>
                    <Text fontWeight={600}>/</Text>
                    <Text fontWeight={600} color={language === 'en' ? '#00fff7' : '#000000'}>EN</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default NavBar