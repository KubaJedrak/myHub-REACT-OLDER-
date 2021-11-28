import useFetch from "../hooks/useFetch"
import CircularProgress from '@mui/material/CircularProgress'
import {Container, Typography} from '@mui/material'
import WeatherDisplay from './WeatherDisplay'

const WeatherInfo = () => {

  let city = "Gdansk"
  let appID = "635c114d813b053fa6d5fe13d2de8688"
  let units = "metric"

  const {error, isPending, data: weather } = useFetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${units}`)
  return (

    <Container>
      { error && <Container> { error } </Container> }
      { isPending && <CircularProgress />}
      { weather && <WeatherDisplay weather={weather} /> }
    </Container>


  //   <div className="weather-bar">
  //     <p>Gdańsk</p>
  //     <p>27&deg;C</p>
  //     <p>Cloudy</p>
  //   </div>
  // 
  )
}

export default WeatherInfo