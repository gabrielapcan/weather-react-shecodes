import React, { useState } from "react";
import "./DisplayTemperature.css";
export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="DisplayTemperature">
        <ul>
          <li>
            <span className="current-temperature">
              {Math.round(props.temp)}
            </span>
            <span className="units">
              ºC |{" "}
              <a href="/" onClick={showFahrenheit}>
                ºF
              </a>
            </span>
          </li>
          <li className="temperature-range">
            ({" "}
            <span>
              {Math.round(props.min)}-{Math.round(props.max)}
            </span>
            <span> ºC</span> )
          </li>
        </ul>
      </div>
    );
  } else if (unit === "fahrenheit") {
    return (
      <div className="DisplayTemperature">
        <ul>
          <li>
            <span className="current-temperature">
              {Math.round((props.temp * 9) / 5 + 32)}
            </span>
            <span className="units">
              <a href="/" onClick={showCelsius}>
                ºC
              </a>{" "}
              | ºF
            </span>
          </li>
          <li className="temperature-range">
            ({" "}
            <span>
              {Math.round((props.min * 9) / 5 + 32)}-
              {Math.round((props.max * 9) / 5 + 32)}
            </span>
            <span> ºF</span> )
          </li>
        </ul>
      </div>
    );
  }
}
