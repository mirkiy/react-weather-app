import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit !== "celsius") {
      temperature = Math.round((temperature * 9) / 5 + 32);
    }
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={40} />
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
