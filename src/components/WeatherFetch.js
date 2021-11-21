import { useState } from "react"
import useFetch from "../hooks/useFetch"

const WeatherFetch = () => {

  let city = "Gdansk"
  let appID = "44cedf7570e6d5a7bb8bdc68dda7c46f"
  let units = "metric"

  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${units}`)
    .then( response => {
      console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}&units=${units}`)
      if (!response.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      return response.json()
    })
    .then(data => {
      setWeatherData(data)
      console.log(data)
    })
    .catch(error => {
      console.log(error);
    })
    return weatherData
  }

  // // change the values later^
  // .then(response => response.json()) 
  // .then(data => {
  //     const city = data.name
  //     const temp = Math.round(data.main.temp)
  //     const weather = data.weather[0].main
  //     const iconID = data.weather[0].icon
  //     const iconIMG = `https://openweathermap.org/img/wn/${iconID}@2x.png`
  // })
  // .catch(err => {
  //     throw(err)
  // })

  return weatherData
}

export default WeatherFetch