/* eslint-disable */
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import { theme } from "../styles/theme"
import TopBar from './TopBar'
import GoalsContainer from './GoalsContainer'
import GigCardContainer from './GigCardContainer'
import BottomNavBar from './BottomNavBar'

const Home = () => {
  const classes = homeStyle()


  return (
    <div>
      {/* <h1 className={classes.header}>Welcome</h1> */}
      <TopBar />
      <GoalsContainer />
    </div>
  )
}

const homeStyle = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",
  },
}))

export default Home
