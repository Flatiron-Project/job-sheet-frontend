/* eslint-disable */
import React from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core'
import { theme } from '../styles/theme'

const Login = () => {
  const classes = loginStyles()

  return (
    <div className={classes.view}>
      <h1 className={classes.title}>ORBIT</h1>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          id='email-input'
          label='Email'
          variant='outlined'
        />
        <TextField
          className={classes.input}
          id='password-input'
          label='Password'
          variant='outlined'
        />
      </form>
      <div className={classes.buttonGroup}>
        <Button className={classes.button} variant="contained" color="primary">LOGIN</Button>
        <Button className={classes.button} variant="contained" color="primary">SIGN UP</Button>
        <Button className={classes.button} variant="contained" color="secondary">Log in with Google</Button>
      </div>
    </div>
  )
}

const loginStyles = makeStyles((theme) => ({
  view: {
    display: 'flex',
    flexDirection: 'column',
    width: '375px',
    height: '812px',
    background:
      'radial-gradient(142.03% 78.35% at 43.72% 78.35%, #03DAC5 0%, #541FE8 5.36%, #3F51DF 13.71%, #1AA4CF 16.09%, #6200EE 16.64%, #3C56DE 26%, #6200EE 28.43%, #03DAC5 30.18%, #6004ED 33.73%, #541FE8 38.5%, #5127E7 54.66%, #414BE0 61.22%, #571AE9 62.87%, #5224E7 67.23%, #03DAC5 80.97%, #483BE3 85.3%, #5E0AEC 88.21%, #541FE8 88.51%, #541FE8 92.94%, #541FE8 100%)',
  },
  title: {
    marginTop: '25%',
    fontFamily: 'Antic Slab',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '24px',
    /* or 67% */
    letterSpacing: '0.15px',
    color: '#000000',
  },
  form: {
    width: '75%',
    margin: 'auto',
  },
  input: {
    marginBottom: '15px',
    width: '100%',
  },  
  button: {
    marginBottom: '15px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    height: '35%',
    margin: 'auto',
  }
}))

export default Login
