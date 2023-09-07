function showData(data) {
    let city = data.name;
    let temp = data.main.temp;
    let pressure = data.main.pressure;
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let speed = data.wind.speed;
    let deg = data.wind.deg;

    let icon = data.weather[0].icon;

    let iconLink = `http://openweathermap.org/img/w/${icon}.png`;
    document.getElementById("icon").src = iconLink;

    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = `Температура: ${temp}`;
    document.getElementById("pressure").textContent = `Тиск: ${pressure}`;
    document.getElementById("description").textContent = `Опис: ${description}`;
    document.getElementById("humidity").textContent = `Вологість: ${humidity}`;
    document.getElementById("speed").textContent = `Швидкість вітру: ${speed}`;
    document.getElementById("deg").textContent = `Напрям у градусах: ${deg}`;
}

function fetchWeather() {
    const weatherLink = "http://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric&APPID=5d066958a60d315387d9492393935c19";

    fetch(weatherLink)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
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


// const xhr = new XMLHttpRequest();

// const weatherLink = "http://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric&APPID=5d066958a60d315387d9492393935c19";

// xhr.open("GET", weatherLink, true);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
    
//         let icon = data.weather[0].icon;

//         let iconLink = `http://openweathermap.org/img/w/${icon}.png`;
//         document.getElementById("icon").src = iconLink;

//         let city = data.name;
//         let temp = data.main.temp;
//         let pressure = data.main.pressure;
//         let description = data.weather[0].description;
//         let humidity = data.main.humidity;
//         let speed = data.wind.speed;
//         let deg = data.wind.deg;

//         document.getElementById("city").textContent = city;
//         document.getElementById("temp").textContent = `Температура: ${temp}`;
//         document.getElementById("pressure").textContent = `Тиск: ${pressure}`;
//         document.getElementById("description").textContent = `Опис: ${description}`;
//         document.getElementById("humidity").textContent = `Вологість: ${humidity}`;
//         document.getElementById("speed").textContent = `Швидкість вітру: ${speed}`;
//         document.getElementById("deg").textContent = `Напрям у градусах: ${deg}`;
//     }
// };
// xhr.send();

