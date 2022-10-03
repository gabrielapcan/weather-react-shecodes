import React from "react";
import "./DisplayTemperature.css";
export default function DisplayTemperature(props) {
  return (
    <div className="DisplayTemperature">
      <ul>
        <li>
          <span className="current-temperature">{Math.round(props.temp)}</span>
          <span className="units">ºC</span>
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
}
