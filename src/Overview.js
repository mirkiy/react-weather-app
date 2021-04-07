import React from "react";
import "./Overview.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Icon from "./Icon";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.data.city}</h1>
      <ul className="first-overview">
        <li>
          Last updated:
          <FormattedDate date={props.data.date} />
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
          <div className="clearfix">
            <div className="float-left">
              <Icon code={props.data.icon} size={75} />
            </div>

            <div className="float-left">
              <Temperature
                celsius={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
