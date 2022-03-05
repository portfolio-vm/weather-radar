import React from 'react';
import "./Weather.scss"
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

export default function Weather({dataCurrentWeather, dataForecastWeather }) {
  return (
    <div className="weather">
      <WeatherCurrent
        currentWeather = { dataCurrentWeather }
      />
      <WeatherForecast
        forecastWeather = { dataForecastWeather }
      />
    </div>
  );
}