import React from "react";
import "./Weather.css";

export default function Weather() {
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
        Porto<small>, Portugal</small>
      </h1>
      <div className="row">
        <div className="col-5">
          <div className="row">
            <div className="col-4">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear sky"
                className="weather-icon"
              />
            </div>
            <div className="col-8">
              <ul>
                <li>
                  <span className="current-temperature">18</span>
                  <span className="units">ºC</span>
                </li>
                <li className="temperature-range">
                  ( <span>15-21</span>
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
                <li>Clear sky</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 10%</li>
                <li>Wind: 8km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
