import React, { useState, useEffect } from "react";

import ForecastData from "./ForecastData";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  function search() {
    let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (ready) {
    return (
      <div className="Weather-forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-4 mb-3" key={index}>
                  <ForecastData data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
