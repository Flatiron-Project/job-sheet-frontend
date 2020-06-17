import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  pallete: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff'
    },
  },
  typography: {
    fontFamily: ['"Titillium Web"', 'sans-serif'].join(','),
  }, 
})