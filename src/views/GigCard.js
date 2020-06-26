/* eslint-disable */
import React, { useState } from "react"
import {
  makeStyles,
  CardMedia,
  CardContent,
  Card,
  Button,
  Typography,
} from "@material-ui/core"
// import { companyData } from "../data/companyData.js"

const useStyles = makeStyles({
  root: {
    width: 160,
    height: 160,
  },
  cardHeader: {
    fontSize: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
})

const GigCard = (props) => {
  // TODO Turn into card w/ material UI
  const classes = useStyles()

  const { id, name, imgSrc, payment } = props
  const placeholder = `https://via.placeholder.com/100/0000FF/808080`

  console.log("gig card", props)
  return (
    <Card className={classes.root} raised={true}>
      {/* <CardContent> */}
      {/* <CardMedia src={placeholder} /> */}
      <h3>{name}</h3>
      <img src={imgSrc} />
      <h4>{payment}</h4>
    </Card>
  )
}

export default GigCard
