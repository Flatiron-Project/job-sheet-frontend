/* eslint-disable */
import React, { useState } from "react"
import { makeStyles, Grid } from "@material-ui/core"
import GigCard from "./GigCard"
import { theme } from "../styles/theme"
import wagSrc from '../assets/Wag.png'
import taskSrc from '../assets/taskrabbit.png'
import instaSrc from '../assets/instacart.png'
import lyftSrc from '../assets/lyft.png'

const gigCardContainerStyle = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",
  },
  container: {
    padding:  20
  },
}))

const companyData = [
  {
    id: 1,
    name: "Wag",
    imgSrc: wagSrc,
    price: 40,
  },
  {
    id: 2,
    name: "Lyft",
    imgSrc: lyftSrc,
    price: 20,
  },
  {
    id: 3,
    name: "Taskrabbit",
    imgSrc: taskSrc,
    price: 75,
  },
  {
    id: 4,
    name: "Instacart",
    imgSrc: instaSrc,
    price: 20,
  },
]

const GigCardContainer = (props) => {
  // TODO Create test cards

  // TODO Will loop through and send props of all gigs down through GigCard
  const renderAllGigCards = companyData.map((gig) => {
    return <GigCard gigProps={gig} />
  })

  const classes = gigCardContainerStyle()

  return (
    <div className={classes.container}>
      <h2>Today's Gigs!</h2>
      <Grid container={true} alignItems='right' alignContent='right'>
        {renderAllGigCards}
      </Grid>
    </div>
  )
}

export default GigCardContainer
