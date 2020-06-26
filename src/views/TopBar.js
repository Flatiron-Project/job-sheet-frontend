/* eslint-disable */
import React, { useState } from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import GigCardContainer from './GigCardContainer'

const TopBar = () => {

  const classes = topBarStyle()

  // TODO Create img of logo
  // TODO add solid color background
  // TODO make sure attached to top of page at all times

  return(
    <div className={classes.view}>
    <h1 className={classes.logo}>Welcome to
      <br/>
      <br/>
    ORBIT</h1>
    <GigCardContainer />
    </div>
  )
}

const topBarStyle = makeStyles((theme) => ({
  view: {
    display: 'flex',
    flexDirection: 'column',
    width: '375px',
    height: '812px',
    background:
      'radial-gradient(142.03% 78.35% at 43.72% 78.35%, #03DAC5 0%, #541FE8 5.36%, #3F51DF 13.71%, #1AA4CF 16.09%, #6200EE 16.64%, #3C56DE 26%, #6200EE 28.43%, #03DAC5 30.18%, #6004ED 33.73%, #541FE8 38.5%, #5127E7 54.66%, #414BE0 61.22%, #571AE9 62.87%, #5224E7 67.23%, #03DAC5 80.97%, #483BE3 85.3%, #5E0AEC 88.21%, #541FE8 88.51%, #541FE8 92.94%, #541FE8 100%)',
  },
  logo: {
    marginTop: '25%',
    fontFamily: 'Antic Slab',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '24px',
    /* or 67% */
    letterSpacing: '0.15px',
    color: '#000000',
  },
}))


export default TopBar
