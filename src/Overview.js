import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <h1 id="city">London</h1>
      <ul>
        <li>
          Last updated: <span id="date">Saturday 13:30</span>
        </li>
        <li id="description">Broken clouds</li>
      </ul>
    </div>
  );
}
