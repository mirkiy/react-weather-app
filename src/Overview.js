import React from "react";
import "./Overview.css";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          Last updated: <span className="date">Saturday 13:30</span>
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://openweathermap.org/img/wn/03d@2x.png"
              alt=""
              id="icon"
              className="float-left"
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
    </div>
  );
}
