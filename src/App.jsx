import {Grid} from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css'

function App() {
  return (
    <Grid className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
    </Grid>
  )
}

export default App
