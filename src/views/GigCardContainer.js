/* eslint-disable */
import React, { useState } from "react"
import { makeStyles, Grid } from "@material-ui/core"
import GigCard from "./GigCard"
import { theme } from "../styles/theme"

const gigCardContainerStyle = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",
  },
  container: {},
}))

const companyData = [
  {
    id: 1,
    name: "Wag",
    imgSrc: "../assets/Wag.png",
  },
  {
    id: 2,
    name: "Lyft",
    imgSrc: "../assets/lyft1.png",
  },
  {
    id: 3,
    name: "Taskrabbit",
    imgSrc: "../assets/TaskrabbitLogo.png",
  },
  {
    id: 4,
    name: "Instacart",
    imgSrc: "../assets/instacart.png",
  },
]

const GigCardContainer = (props) => {
  // TODO Create test cards

  // TODO Will loop through and send props of all gigs down through GigCard
  const renderAllGigCards = companyData.forEach((gig) => {
    const { id, name, imgSrc } = gig
    return <GigCard id={id} name={name} imgSrc={imgSrc} />
  })

  const classes = gigCardContainerStyle()

  console.log(renderAllGigCards)
  return (
    <div className={classes.header}>
      <h2>Today's Gigs!</h2>
      <Grid container={true} alignItems='center'>
        {renderAllGigCards}
        <GigCard
          id={companyData[0].id}
          name={companyData[0].name}
          imgSrc={companyData[0].imgSrc}
        />
      </Grid>
    </div>
  )
}

export default GigCardContainer
