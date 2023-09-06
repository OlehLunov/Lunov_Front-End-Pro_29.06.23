function showData(data) {
    let city = data.name;
    let temp = data.main.temp;
    let pressure = data.main.pressure;
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let speed = data.wind.speed;
    let deg = data.wind.deg;


    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = temp;
    document.getElementById("pressure").textContent = `Тиск: ${pressure}`;
    document.getElementById("description").textContent = description;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("speed").textContent = speed;
    document.getElementById("deg").textContent = deg;
}

function fetchWeather() {
    const weatherLink = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

    fetch(weatherLink)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else 
                throw new Error('Запит не ОК');
            }
        })
        .then(data => {
            showData(data);
        })
        .catch(error => {
            console.error('Проблема з fetch', error);
        });
}

fetchWeather();
