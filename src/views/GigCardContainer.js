/* eslint-disable */
import React, { useState } from "react"
import { makeStyles, Grid } from "@material-ui/core"
import GigCard from "./GigCard"
import { theme } from "../styles/theme"

const gigCardContainerStyle = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",

  },
  container: {
    padding:  20
  },
  card: {
    margin: 'auto'
  }
}))

const companyData = [
  {
    id: 1,
    name: "Wag",
    imgSrc: "Wag.png",
    payment:"$50"
  },
  {
    id: 2,
    name: "Lyft",
    imgSrc: "lyft 1.png",
    payment:"$160"
  },
  {
    id: 3,
    name: "Taskrabbit",
    imgSrc: "TaskrabbitLogo.png",
    payment:"$100"
  },
  {
    id: 4,
    name: "Instacart",
    imgSrc: "instacart.png",
    payment:"$75"
  },
]

const GigCardContainer = (props) => {
  // TODO Create test cards

  // TODO Will loop through and send props of all gigs down through GigCard
  const renderAllGigCards = companyData.forEach((gig) => {
    const { id, name, imgSrc, payment } = gig
    return <GigCard id={id} name={name} imgSrc={imgSrc} payment={payment}/>
  })

  const classes = gigCardContainerStyle()

  return (
    <div className={classes.container}>
      <h2>Today's Gigs!</h2>
      <Grid container={true} align-items='left' align-content="center">
        {renderAllGigCards}
        // this is repetitive we should use .map to go through the gigs here
        <GigCard
          id={companyData[0].id}
          imgSrc={companyData[0].imgSrc}
          payment={companyData[0].payment}
          className={classes.card}
        />
        <GigCard
          id={companyData[1].id}
          imgSrc={companyData[1].imgSrc}
          payment={companyData[1].payment}
          className={classes.card}
        />
        <GigCard
          id={companyData[2].id}
          imgSrc={companyData[2].imgSrc}
          payment={companyData[2].payment}
          className={classes.card}
        />
        <GigCard
          id={companyData[3].id}
          imgSrc={companyData[3].imgSrc}
          payment={companyData[3].payment}
          className={classes.card}
        />
      </Grid>
    </div>
  )
}

export default GigCardContainer
