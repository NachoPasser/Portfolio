import {Grid} from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Learning from './components/Learning/Learning'
import './App.css'

function App() {
  return (
    <Grid className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills />
      <Learning/>
    </Grid>
  )
}

export default App
