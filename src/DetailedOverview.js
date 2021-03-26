import React from "react";
import "./DetailedOverview.css";

export default function DetailedOverview() {
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">53</span>%
          </li>
          <li>
            Wind: <span id="wind">39</span> km/h
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt=""
            id="icon"
            className="float-start"
          />
          <div className="float-left">
            <strong id="temperature">9</strong>
            <span className="units">
              <a
                href="https://www.bbc.co.uk/weather"
                id="celsius-link"
                className="active text-decoration-none"
              >
                °C
              </a>
              |
              <a
                href="https://www.bbc.co.uk/weather"
                id="fahrenheit-link"
                className="text-decoration-none"
              >
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
