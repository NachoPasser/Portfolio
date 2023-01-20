import { useState } from 'react'
import {Grid} from '@chakra-ui/react'
import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  return (
    <Grid className="App">
      <NavBar/>
      <Home/>
    </Grid>
  )
}

export default App
