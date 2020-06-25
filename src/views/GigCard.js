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
import { withRouter } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: 160,
    height: 160,
  },
  cardHeader: {
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    margin: 2,
  },
  price: {
    // color: 'red'
  },
})

const GigCard = (props) => {
  // TODO Turn into card w/ material UI
  const classes = useStyles()

  const { id, name, imgSrc, price } = props.gigProps
  // const placeholder = `https://via.placeholder.com/100/0000FF/808080`

  const handleGigClick = (e) => {
    // TODO go to gig ticket url for this gigID
    // /gig-ticket/:id
    console.log(e, props)
  }

  console.log("gig card", props)
  return (
    <Card className={classes.root} raised={true} onClick={handleGigClick}>
      <CardContent>
        {/* <CardMedia src={imgSrc}  /> */}
        <img src={imgSrc} className={classes.img} />
        <Typography className={classes.cardHeader} className={classes.price}>
          ~${price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withRouter(GigCard)
