import React, { useState } from "react";
import "./Search.css";
import Overview from "./Overview";
import axios from "axios";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  //Geolocation - current location btn
  function currentLocation(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apiKey = "c00c3900e504f42a171bf56d7e9488fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  //Handle function for the API's Response
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searching();
  }

  //Handling the city input
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  //Searching the API
  function searching() {
    const apiKey = "c00c3900e504f42a171bf56d7e9488fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  //Return
  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="search" className="btn btn-light" />
            </div>
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-geo-alt city-current"
                viewBox="0 0 16 16"
                onClick={getLocation}
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
          </div>
        </form>
        <Overview data={weatherData} unit={unit} setUnit={setUnit} />
        <Forecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    //Call the API
    searching();
    return "Loading...";
  }
}
