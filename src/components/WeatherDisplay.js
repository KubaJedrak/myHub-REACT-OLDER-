import { Container, Typography } from "@mui/material"
import { useState } from "react"


const WeatherDisplay = ({weather}) => {

  console.log(weather)

  const [city, setCity] = useState(weather.name)
  const [temp, setTemp] = useState(Math.round(weather.main.temp))
  const [weatherType, setWeatherType] = useState(weather.weather[0].main)
  // const iconID = weather.weather[0].icon
  // const iconIMG = `https://openweathermap.org/img/wn/${iconID}@2x.png`
  // const weatherIMG = fetch(`https://openweathermap.org/img/wn/${iconID}@2x.png`)

  return (
    <Container sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',

    }}>
      {city} | {`${temp} °C`} | {weatherType}
    </Container>
  )
}

export default WeatherDisplay