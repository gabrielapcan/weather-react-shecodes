import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1 className="mt-3">
        {props.data.displayCity}
        <small>, {props.data.country}</small>
      </h1>

      <div className="row">
        <div className="col-5">
          <div className="row mb-4">
            <div className="col-4">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="weather-icon"
              />
            </div>
            <div className="col-8">
              <ul>
                <li>
                  <span className="current-temperature">
                    {Math.round(props.data.temperature)}
                  </span>
                  <span className="units">ºC</span>
                </li>
                <li className="temperature-range">
                  ({" "}
                  <span>
                    {Math.round(props.data.minTemp)}-
                    {Math.round(props.data.maxTemp)}
                  </span>
                  <span>ºC</span> )
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-description">
            <ul className="mt-3">
              <li>
                <FormattedDate dateSend={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <ul className="mt-2">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-7"></div>
      </div>
    </div>
  );
}
