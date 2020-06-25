/* eslint-disable */
import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"

const TopBar = () => {

  const classes = topBarStyle()

  // TODO Create img of logo
  // TODO add solid color background 
  // TODO make sure attached to top of page at all times
  
  return(
    <div className='top-bar' className={classes.logo}>
      ORBIT
    </div>
  )
}

const topBarStyle = makeStyles((theme) => ({
  logo: {
    fontWeight: "bold",
  },
}))


export default TopBar