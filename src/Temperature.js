import React from "react";

export default function Temperature(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  if (props.unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C | {""}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | °F
        </span>
      </div>
    );
  }
}
