import { Container, Typography } from "@mui/material"
import { useState } from "react"


const WeatherDisplay = ({weather}) => {

  const [city, setCity] = useState(weather.name)
  const [temp, setTemp] = useState(Math.round(weather.main.temp))
  const [weatherType, setWeatherType] = useState(weather.weather[0].main)
  const iconID = weather.weather[0].icon
  const iconIMG = `https://openweathermap.org/img/wn/${iconID}@2x.png`

  return (
    <Container sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'left',

    }}>
      {city} | {`${temp} °C`} | {weatherType} <img src={iconIMG} alt="" width="25px" height="25px" padding="0px" margin="0px" />
    </Container>
  )
}

export default WeatherDisplay