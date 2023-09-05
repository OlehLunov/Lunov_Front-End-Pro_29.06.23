const  weatherLink = fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19");

fetch(weatherLink)
    .then (function (response) {
        if ( response.ok){
            return response.ok;
        }
    })
    .then (function (info){
        
    })
