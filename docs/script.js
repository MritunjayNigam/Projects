let apiKey = "bbd8977601ab8e1767a9a523a792a9f4";

async function weatherReport() {
    
    let cityName = document.getElementById("country").value
    if (!cityName) {
        alert("Enter City name");
        return
    }

    document.querySelector(".intro").style.visibility = "hidden"
    document.querySelector(".loader").style.display = "block"
    document.querySelector(".core").style.visibility = "hidden"
    document.querySelector(".foot").style.visibility = "hidden"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    
    if (data.cod !== 200) {
        alert("City Not Found !, Enter a valid city name")
        document.querySelector(".intro").style.visibility = "visible"
        document.querySelector(".loader").style.display = "none"
        return
    }
    const main = [
        "clear",
        "clouds",
        "rain",
        "drizzle",
        "thunderstorm",
        "snow",
        "mist",
        "atmosphere"
    ];

    if (data.weather[0].description = main[0]) {
        document.querySelector(".core img").src = `images/${main[0]}.png`
    }


    document.querySelector(".loader").style.display = "none"
    document.querySelector(".core").style.visibility = "visible"
    document.querySelector(".foot").style.visibility = "visible"


    let city = document.querySelector(".city");
    let humidity = document.querySelector(".humidity")
    let windspeed = document.querySelector(".wind")
    let temperature = document.querySelector(".temp")

    city.innerHTML = `${data.name}`
    humidity.innerHTML = `${data.main.humidity}%`
    windspeed.innerHTML = `${data.wind.speed}km/h`
    temperature.innerHTML = `${data.main.temp}°C`

}

document.getElementById("submit").addEventListener("click", weatherReport);
document.getElementById("country").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        weatherReport(); // Directly call the function
    }
});
