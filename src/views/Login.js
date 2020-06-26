/* eslint-disable */
import React, { useState } from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = loginStyle()

  const handleLogin = () => {
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  }

  const handleSignup = () => {
    console.log(`Redirect to Sign Up Page`)
  }

  return (
    <div className={classes.view}>
      <h1 className={classes.title}>ORBIT</h1>
      <form className={classes.form}>
        <TextField
          value={email}
          className={classes.inputField}
          id='email-input'
          label='Email'
          variant='outlined'
          color='primary'
          InputProps={{
            className: classes.input,
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={password}
          className={classes.inputField}
          type='password'
          id='password-input'
          label='Password'
          variant='outlined'
          color='primary'
          InputProps={{
            className: classes.input,
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className={classes.buttonGroup}>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleLogin}
        >
          LOGIN
        </Button>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
        <Button
          className={classes.googleButton}
          variant='contained'
        >
          Log in with Google
        </Button>
      </div>
    </div>
  )
}

const loginStyle = makeStyles({
  view: {
    display: 'flex',
    flexDirection: 'column',
    width: '375px',
    height: '812px',
    background: 'linear-gradient(0.4deg, #6200EE 3.88%, #03DAC5 105.33%)',
  },
  title: {
    marginTop: '25%',
    fontWeight: 'normal',
    fontSize: '48px',
    lineHeight: '24px',
    letterSpacing: '15px',
    color: '#7F39FB',
  },
  form: {
    width: '75%',
    margin: 'auto',
  },
  inputField: {
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    color: '#03DAC5',
  },
  button: {
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    height: '35%',
    margin: 'auto',
  },
})

export default Login
