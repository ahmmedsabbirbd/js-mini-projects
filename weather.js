const Weather = {
  getWeatherData:async (apiUrl, location) => {
    try {
      const response = await fetch(apiUrl + location);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },
  displayWeatherInfo (weather) {
    const weatherInfo = document.getElementById('weatherInfo');
    if(!weather.error) {
      weatherInfo.innerHTML = `
        <h4>Weather Information</h4>
        <p>Location: ${weather.location.name}, ${weather.location.country}</p>
        <p>Temperature: ${weather.current.temp_c}°C</p>
        <p>Condition: ${weather.current.condition.text}</p>
        <p>Humidity: ${weather.current.humidity}%</p>
      `;
    } else {
      weatherInfo.innerHTML = `
        <p>${weather.error.message}</p>
      `;
    }
  },
  handleSubmit:async (apiUrl) => {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();
    
    if (location !== '') {
      const weatherData = await Weather.getWeatherData(apiUrl, location);
      Weather.displayWeatherInfo(weatherData)
    }
  }
}

export { Weather }