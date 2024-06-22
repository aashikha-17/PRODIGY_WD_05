

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    const apiKey = '9f4d4166e7daff8faa2bb085f0660467'; // Replace with your OpenWeatherMap API key
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherResult = document.getElementById('weather-result');
                weatherResult.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
                weatherResult.style.display = 'block'; // Show the weather result div
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
});

