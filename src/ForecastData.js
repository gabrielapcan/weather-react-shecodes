import React from "react";
import Icon from "./Icon";
import "./ForecastData.css";

export default function ForecastData(props) {
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = date.getDay();
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);

  return (
    <div className="forecast-data">
      <div className="forecast-day">{days[day]}</div>
      <div className="m-2">
        <Icon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="forecast-weather">
        <span className="forecast-max">{maxTemp}º</span>
        <span className="forecast-min">{minTemp}º</span>
      </div>
    </div>
  );
}
