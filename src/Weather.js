import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>
        Porto<small>, Portugal</small>
      </h1>
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear sky"
              />
            </div>
            <div className="col-8">
              <ul>
                <li>18ºC</li>
                <li>15-21ºC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Monday, 18:00</li>
            <li>Clear sky</li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
