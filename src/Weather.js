import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      displayCity: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn w-100 search-button"
              />
            </div>
          </div>
        </form>
        <h1>
          {weatherData.displayCity}
          <small>, {weatherData.country}</small>
        </h1>
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-4">
                <img
                  src={weatherData.icon}
                  alt="clear sky"
                  className="weather-icon"
                />
              </div>
              <div className="col-8">
                <ul>
                  <li>
                    <span className="current-temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">ºC</span>
                  </li>
                  <li className="temperature-range">
                    ({" "}
                    <span>
                      {Math.round(weatherData.minTemp)}-
                      {Math.round(weatherData.maxTemp)}
                    </span>
                    <span>ºC</span> )
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Monday, 18:00</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8d1684c8dfd4c7c9e701ecf0706e6732";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
