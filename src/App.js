import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/theme'
import Routes from './components/Routes'
// import 'fontsource-antic-slab'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
