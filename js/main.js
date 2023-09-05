const  weatherLink = fetch("http://api../data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
fetch(weatherLink)
    .then (function (response) {
        if ( response.ok){
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then (function (data){

        let city = data.name;
        let temp = data.main.temp;
        let pressure = data.main.pressure;
        let description  = data.weather[0].description;
        let humidity  =data.main.humidity;
        let speed  = data.wind.speed;
        let deg  = data.wind.deg;

        document.getElementById("city").textContent = city;
        document.getElementById("temp").textContent = temp;
        document.getElementById("pressure").textContent = pressure;
        document.getElementById("description").textContent = description;
        document.getElementById("humidity").textContent = humidity;
        document.getElementById("speed").textContent = speed;
        document.getElementById("deg").textContent = deg;
    })

    .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
    });