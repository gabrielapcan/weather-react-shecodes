import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import Icon from "./Icon";
import DisplayTemperature from "./DisplayTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1 className="mt-3">
        {props.data.displayCity}
        <small>, {props.data.country}</small>
      </h1>

      <div className="row">
        <div className="col-sm-5 mb-3 mb-sm-1">
          <div className="row mb-4">
            <div className="col col-md-6 temperature-icon">
              <Icon code={props.data.icon} size={60} />
            </div>
            <div className="col col-md-6 current-temperature">
              <DisplayTemperature
                temp={props.data.temperature}
                min={props.data.minTemp}
                max={props.data.maxTemp}
              />
            </div>
          </div>
          <div className="row weather-description">
            <div className="col-6 col-sm-12">
              <ul className="">
                <li>
                  <FormattedDate dateSend={props.data.date} />
                </li>
                <li className="text-capitalize mt-2 mb-2">
                  {props.data.description}
                </li>
              </ul>
            </div>{" "}
            <div className="col-6 col-sm-12">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li className="mt-2">
                  Wind: {Math.round(props.data.wind)}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <WeatherForecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}
