fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=4d74bf077872f538ebf94fda12f4c4fe")

.then(response => response.json())
.then(data => {

    const weather = document.getElementById("name")
    weather.innerHTML = (data.name)

    const weather2 = document.getElementById("temp_min")
    weather2.innerHTML = (data.main.temp_min)

    const weather3 = document.getElementById("temp_max")
    weather3.innerHTML = (data.main.temp_max)

    const weather4 = document.getElementById("temp")
    weather4.innerHTML = (data.main.temp)

    const weather5 = document.getElementById("sensacao")
    weather5.innerHTML = (data.main.feels_like)

    console.log(data)
})