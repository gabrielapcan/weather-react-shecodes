import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  let apiKey = "8d1684c8dfd4c7c9e701ecf0706e6732";
  let units = "metric";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      displayCity: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-7 mt-2">
          <input
            type="search"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-sm-3 mt-2">
          <input type="submit" value="Search" className="w-100 search-button" />
        </div>
        <div className=" col-sm-2 mt-2">
          <a
            href="/"
            label="current location search button"
            rel="noopener no referrer"
            onClick={handleCurrentLocation}
          >
            <i className="fa-solid fa-map-location-dot location-icon"></i>
          </a>
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        {form}
        <div>
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#272343"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </div>
    );
  }
}
