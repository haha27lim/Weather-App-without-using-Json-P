import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(`http://localhost:8080/api/weather?city=${city}`);
        const data = await response.json();
        setWeatherData(data);
    };

    return (
        <div>
            <h1>City Weather</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name" 
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
                </div>
            )}
        </div>
    );
};

export default Weather; 