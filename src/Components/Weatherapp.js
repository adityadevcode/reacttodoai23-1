import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weatherapp = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={88719fea18c6731059025ed7802b8e86}`
        // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88719fea18c6731059025ed7802b8e86`
        // `https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={88719fea18c6731059025ed7802b8e86}`  
        // `https://api.openweathermap.org/data/2.5/weather?q=London&appid={88719fea18c6731059025ed7802b8e86}`
        // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${88719fea18c6731059025ed7802b8e86}`
        // `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=88719fea18c6731059025ed7802b8e86}`
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={88719fea18c6731059025ed7802b8e86}`
        );
      setWeather(result.data);
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div>
      <form>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </label>
      </form>
      {weather.main && (
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weatherapp;
