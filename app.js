const weatherApi = {
    key: "c888ca46cda78bd297efd329b03fcd55",
    // baseUrl: "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
}


const SearchInputBox = document.getElementById('input-box');

const weatherbtn = document.getElementById('weather-btn')
const city1 = document.getElementById('city')
const date = document.getElementById('date')
const temp1 = document.getElementById('temp1')
const min = document.getElementById('min')
const max = document.getElementById('max')
const weather = document.getElementById('weather')
const body = document.getElementById('body')


//Event Listener Function on Keypress


//Get Weather Report

weatherbtn.addEventListener('click', () => {
    let cityname = SearchInputBox.value
    console.log(cityname)

    function getWeatherReport(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                city1.innerText = city;
                date.innerText = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
                temp1.innerText = data.main.temp;
                min.innerText = data.main.temp_min;
                max.innerText = data.main.temp_max;
                weather.innerText = data.weather[0].main;
                console.log(weather.textContent)

                if (weather.textContent == 'Clear') {
                    body.style.backgroundImage = "url('img/clear.jpg')";

                } else if (weather.textContent == 'Clouds') {
                    body.style.backgroundImage = "url('img/cloudy.jpg')";

                } else if (weather.textContent == 'sunny') {
                    body.style.backgroundImage = "url('img/sunny.jpg')";

                } else if (weather.textContent == 'rainy') {
                    body.style.backgroundImage = "url('img/rainy.jpg')";

                } else if (weather.textContent == 'lightening') {
                    body.style.backgroundImage = "url('img/lightening.jpg')";

                } else if (weather.textContent == 'snow') {
                    body.style.backgroundImage = "url('img/snow.jpg')";
                } else if (weather.textContent == 'Mist') {
                    body.style.backgroundImage = "url('img/mist.jpg')";
                } else if (weather.textContent == 'Fog') {
                    body.style.backgroundImage = "url('img/fog.jpg')";
                }


            });
    }
    getWeatherReport(cityname)
});