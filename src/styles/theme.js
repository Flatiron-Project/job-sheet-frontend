import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  pallete: {
    primary: {
      main: '#6E00EE',
      contrastText: '#03DAC5',
    },
    secondary: {
      main: '#03DAC5',
      contrastText: '#ffffff'
    },
  },
  typography: {
    fontFamily: ['"Titillium Web"', 'sans-serif'].join(','),
  }, 
})