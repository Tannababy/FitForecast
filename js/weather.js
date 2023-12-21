// Variables

const apiKey = "4691032df8d1c150d279bf0141595f60";
const defaultCity = 'London';
var currentCity = '';
const date = dayjs().format('DD/MM/YYYY');
const weatherCityName = $('#city-name');
const weatherDateToday = $('#today-date');
const weatherIcon = $('#weather-icon');
const weatherTemp = $('#temperature');
const weatherHumidity = $('#humidity');
const weatherWind = $('#wind');
const weatherForm = $('#search-form');
const weatherFormInput = $('#search-input');
var localStoragePrecipKey="precipitation";

//Set methods 
function setCity(element, text) {
    currentCity = text;
    element.text(text);
}

function setDate(element, text) {
    element.text(text);
}

function setIcon(element, icon) {
    var iconUrl = 'https://openweathermap.org/img/w/' + icon.icon + '.png';
    element.attr('src', iconUrl);
    element.attr('alt', icon.description);
}

function setTemp(element, text) {
    element.text("Temperature: " + text + '℃');
}

function setHum(element, text) {
    element.text("Humidity: " + text + ' %');
}

function setWind(element, text) {
    element.text("Wind: " + text + ' meter/sec');
}

function setWeatherCard(city, weather) {
    setCity(weatherCityName, city);
    setDate(weatherDateToday, date);
    setIcon(weatherIcon, weather.weather[0]);
    setTemp(weatherTemp, weather.main.temp);
    setHum(weatherHumidity, weather.main.humidity);
    setWind(weatherWind, weather.wind.speed);
}

//
function search(cityInput) {
    var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&limit=1&appid=' + apiKey
    fetch(geoUrl)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            // console.log(data)
            var lat = data[0].lat
            var lon = data[0].lon
            var cityName = data[0].name

            fetchPrecipitation(lat, lon)

            var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
            fetch(weatherUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    // console.log(data)

                    setWeatherCard(cityName, data);
                })
        })
}

// 2. Get geolocation
//Method to handle success callback when we get location from browser
function successLocation(locationCoords) {
    const lat = locationCoords.coords.latitude;
    const lon = locationCoords.coords.longitude;
    fetchPrecipitation(lat, lon)

    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
    fetch(weatherUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            // console.log(data);

            setWeatherCard(data.name, data);
        })
}

//If error defaut to London and make API call for London
//https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError
function errorLocation(error) {
    console.log('unable to retrieve location,got error code ' + error.code);
    console.log('defaulting to ' + defaultCity);

    search(defaultCity)
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
    }
}

//create form submit event to update the city 
weatherForm.on('submit', function (event) {
    event.preventDefault();
    var weatherInput = weatherFormInput.val().trim();
    weatherFormInput.val('');
    if (weatherInput == "") {
        return;
    } else if (currentCity.toLowerCase() == weatherInput.toLowerCase()) {
        //dont call API when the same city
        return;
    }
    search(weatherInput);
})

//
//-function to determinate what kind of weather it is now(like rain, sun,wind...)
function fetchPrecipitation(lat, lon){
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=1&lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // list.pop Probability of precipitation.
            // The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
            console.log(data.list[0].pop)
          var precipitationRezult=data.list[0].pop;
          localStorage.setItem(localStoragePrecipKey,precipitationRezult);
        })
}

function isIndoorWorkout(){

}

//TODO delete or change?
getLocation()
