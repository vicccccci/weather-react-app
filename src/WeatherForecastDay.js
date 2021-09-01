
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      {" "}
      <div className="forecast-day mb-2">
        <strong>{day()}</strong>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="forecast-temperatures">
        <span className="forecast-temp-max">{maxTemperature()}</span>

        <span className="forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}