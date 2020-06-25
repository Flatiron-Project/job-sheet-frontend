/* eslint-disable */
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import GigCard from "./GigCard"

const GigCardContainer = (props) => {
  
  // TODO Create test cards

  // TODO Will loop through and send props of all gigs down through GigCard
  // const renderAllGigCards = (() => {
  //   <GigCard gigProps={} />
  // })

  return (
    <div className='gig-card-container'>
      GigCardContainer
      <GigCard id={1} />
      <GigCard id={2} />

    </div>
  )
}

export default GigCardContainer
