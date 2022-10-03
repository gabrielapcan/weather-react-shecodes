import React from "react";
import Icon from "./Icon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="Weather-forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tue</div>
          <div className="m-2">
            <Icon code="01d" size="30" />
          </div>
          <div className="forecast-weather">
            <span className="forecast-max">19º</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
