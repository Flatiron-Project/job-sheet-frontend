/* eslint-disable */
import React, { useState } from 'react'

const GigCard = (props) => {

  // TODO Turn into card w/ material UI
  return(
    <div className={`gig-card-${props.id}`}>
      Card #{props.id}
    </div>
  )
}

export default GigCard