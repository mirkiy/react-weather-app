import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <h1 className="city">London</h1>
      <ul>
        <li>
          Last updated: <span className="date">Saturday 13:30</span>
        </li>
        <li className="description">Broken clouds</li>
      </ul>
    </div>
  );
}
