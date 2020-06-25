import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'
// import 'fontsource-antic-slab'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
