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
    width: 150,
    height: 150,
  },
})

const GigCard = (props) => {
  // TODO Turn into card w/ material UI
  const classes = useStyles()

  const { id, name, imgSrc } = props
  const placeholder = `https://via.placeholder.com/100/0000FF/808080`

  console.log("gig card", props)
  return (
    <Card className={classes.root} raised={true}>
      {/* <CardContent> */}
      {/* <CardMedia src={placeholder} /> */}
      <h3>{name}</h3>
      {/* <img src={placeholder} /> */}
      <img src={imgSrc} />
      {/* <Typography className={classes.cardHeader}>Card # {props.id}</Typography> */}
      {/* </CardContent> */}
    </Card>
  )
}

export default GigCard
