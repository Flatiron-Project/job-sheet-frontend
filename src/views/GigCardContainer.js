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

  console.log(renderAllGigCards)
  return (
    <div className={classes.header}>
      <h2>Todays Gigs!</h2>
      <Grid container={true} align-items='center'>
        {renderAllGigCards}
        <GigCard
          id={companyData[0].id}
          imgSrc={companyData[0].imgSrc}
          payment={companyData[0].payment}
        />
        <GigCard
          id={companyData[1].id}
          imgSrc={companyData[1].imgSrc}
          payment={companyData[1].payment}
        />
        <GigCard
          id={companyData[2].id}
          imgSrc={companyData[2].imgSrc}
          payment={companyData[2].payment}
        />
        <GigCard
          id={companyData[3].id}
          imgSrc={companyData[3].imgSrc}
          payment={companyData[3].payment}
        />
      </Grid>
    </div>
  )
}

export default GigCardContainer
