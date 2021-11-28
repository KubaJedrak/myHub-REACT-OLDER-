import { Container, Typography } from "@mui/material"


const WeatherDisplay = ({weather}) => {

  console.log(weather)
  const city = weather.name
  const temp = Math.round(weather.main.temp)
  const weatherType = weather.weather[0].main
  const iconID = weather.weather[0].icon
  const iconIMG = `https://openweathermap.org/img/wn/${iconID}@2x.png`
  const weatherIMG = fetch(`https://openweathermap.org/img/wn/${iconID}@2x.png`)
  console.log(weatherIMG)

  console.log(city, temp, weatherType, iconID, iconIMG, weatherIMG)
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