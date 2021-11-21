import { Button, Card, CardMedia, Container, Divider, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';

import Title from './ComponentTitle'

const Home = (title) => {
  
  let [waterConsumed, setWaterConsumed] = useState(0)

  const handleClick = () => {
    setWaterConsumed(waterConsumed + 300)
  }

  const handleReset = () => {
    setWaterConsumed(0)
  }


  return (
    <Box sx={{minHeight: "91vh"}}>
      <Title title={title.componentTitle} />

      <Card>
        {/* <CardMedia
          component="img"
          alt={`Image of ${recipe.name}`}
          image={`${recipe.imgURL}`}
        /> */}
        <Typography variant="h6" >
          How much water did you drink today?
        </Typography>
        <Divider />

        <Box component="form" sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: 1}}>
          <Button onClick={handleReset}>
            <RefreshIcon />
          </Button>
          <Container sx={{width: 0.4, backgroundColor: "lightgray", textAlign: "center", margin: 0}}>
            <Typography sx={{fontSize: "2em"}}>{waterConsumed}ml</Typography>
          </Container>
          <Button onClick={handleClick}>
            <AddIcon />
          </Button>

        </Box>


      </Card>
    </Box>
  )
}

export default Home

  // const date = new Date()
  // const currentDay = date.getDay()
  // // const previousDay = new Date(currentDay)
  // const previousDay = new Date('November 5, 2021 03:24:00')

  // console.log(currentDay);
  // console.log(previousDay);

  // const checkDay = (currentDay, previousDay) => {
  //   console.log(currentDay);
  //   if (currentDay.setHours(0, 0, 0, 0) - previousDay.setHours(0, 0, 0, 0) >= 0) {
  //     console.log("All good");
  //   } else {
  //     console.log("Gotta change the day")
  //   }
  // }

  // checkDay()