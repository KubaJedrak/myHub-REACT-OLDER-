fetch("http://api.openweathermap.org/data/2.5/weather?q=Gdansk&appid=44cedf7570e6d5a7bb8bdc68dda7c46f&units=metric")
.then(response => response.json()) 
.then(data => {
    const city = data.name
    const temp = Math.round(data.main.temp)
    const weather = data.weather[0].main
    const iconID = data.weather[0].icon
    const iconIMG = `https://openweathermap.org/img/wn/${iconID}@2x.png`

    const sidebarModuleOne = document.querySelector(".app-sidebar-module-1")

    const weatherContent = `
        <div class="weather-container">
            <h1 class="weather-time"></h1>
            <h2 class="weather-city">${city}</h2>
            <p class="weather-temp">${temp}&deg;C</p>
            <p class="weather-info">${weather}</p>
        </div>
        <img src=${iconIMG} class="weather-icon">
    ` 

    sidebarModuleOne.innerHTML = weatherContent;
})
.catch(err => {
    throw(err)
})

// FIX THIS LATER:
const date = new Date();
const clockTimer = setInterval(clockFunc, 1000)
