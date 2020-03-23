let citySearch = document.getElementById('citySearch')
let searchCityButton = document.getElementById('searchCityButton')
let nameDate = document.getElementById('nameDate')
let temperature = document.getElementById('temperature')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('windSpeed')
let UVIndex = document.getElementById('UVIndex')
let mainIcon = document.getElementById('mainIcon')
let date1 = document.getElementById('date1')
let date2 = document.getElementById('date2')
let date3 = document.getElementById('date3')
let date4 = document.getElementById('date4')
let date5 = document.getElementById('date5')
let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')
let tempDay1 = document.getElementById('tempDay1')
let tempDay2 = document.getElementById('tempDay2')
let tempDay3 = document.getElementById('tempDay3')
let tempDay4 = document.getElementById('tempDay4')
let tempDay5 = document.getElementById('tempDay5')
let humDay1 = document.getElementById('humDay1')
let humDay2 = document.getElementById('humDay2')
let humDay3 = document.getElementById('humDay3')
let humDay4 = document.getElementById('humDay4')
let humDay5 = document.getElementById('humDay5')



let today = new Date()
let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()

searchCityButton.addEventListener('click', function() {

    renderCurrentWeather()

    renderForecast()

})


function renderCurrentWeather() {
    let currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + citySearch.value.trim() + `&appid=680c5ae8dc23ee4fa4e4d1f33c400f74&units=metric`

    fetch(currentUrl)
        .then(function(result) {
            return result.json()
        })
        .then(function(weather) {
            console.log(weather)

            nameDate.textContent = weather.name + " " + date
            mainIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png')

            temperature.textContent = 'Temperature : ' + weather.main.temp + " C"
            humidity.textContent = 'Humidity : ' + weather.main.humidity + " %"
            windSpeed.textContent = 'Wind Speed : ' + weather.wind.speed + " MPH"

            let UVUrl = `https://api.openweathermap.org/data/2.5/uvi?appid=680c5ae8dc23ee4fa4e4d1f33c400f74&lat=` + weather.coord.lat + `&lon=` + weather.coord.lon

            fetch(UVUrl)
                .then(function(result) {
                    return result.json()
                })
                .then(function(data) {
                    console.log(data)

                    UVIndex.textContent = 'UV Index : ' + data.value

                    if (data.value === 0 || data.value < 2) {
                        UVIndex.setAttribute('class', 'low')
                    } else if (data.value === 2 || data.value < 7 ) {
                        UVIndex.setAttribute('class', 'moderate')
                    } else if (data.value === 7 || data.value < 10 ) {
                        UVIndex.setAttribute('class', 'high')
                    }
            })
        })
}

function renderForecast() {
    let forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=` + citySearch.value.trim() + `&appid=680c5ae8dc23ee4fa4e4d1f33c400f74&units=metric`

    fetch(forecasturl)
        .then(function(result) {
            return result.json()
        })
        .then(function(forecast) {
            console.log(forecast)

            date1.textContent = forecast.list[4].dt_txt
            icon1.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast.list[4].weather[0].icon + '@2x.png')
            tempDay1.textContent = 'Temp : ' + forecast.list[4].main.temp + ' C'
            humDay1.textContent = 'Humidity : ' + forecast.list[4].main.humidity + ' %'
        
            date2.textContent = forecast.list[12].dt_txt
            icon2.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast.list[12].weather[0].icon + '@2x.png')
            tempDay2.textContent = 'Temp : ' + forecast.list[12].main.temp + ' C'
            humDay2.textContent = 'Humidity : ' + forecast.list[12].main.humidity + ' %'

            date3.textContent = forecast.list[20].dt_txt
            icon3.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast.list[20].weather[0].icon + '@2x.png')
            tempDay3.textContent = 'Temp : ' + forecast.list[20].main.temp + ' C'
            humDay3.textContent = 'Humidity : ' + forecast.list[20].main.humidity + ' %'

            date4.textContent = forecast.list[28].dt_txt
            icon4.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast.list[28].weather[0].icon + '@2x.png')
            tempDay4.textContent = 'Temp : ' + forecast.list[28].main.temp + ' C'
            humDay4.textContent = 'Humidity : ' + forecast.list[28].main.humidity + ' %'

            date5.textContent = forecast.list[36].dt_txt
            icon5.setAttribute('src', 'http://openweathermap.org/img/wn/' + forecast.list[36].weather[0].icon + '@2x.png')
            tempDay5.textContent = 'Temp : ' + forecast.list[36].main.temp + ' C'
            humDay5.textContent = 'Humidity : ' + forecast.list[36].main.humidity + ' %'
        })

}
