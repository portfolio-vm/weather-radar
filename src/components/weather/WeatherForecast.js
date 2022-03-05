import React from "react";
import Card from "../сard/Card";
import "./WeatherForecast.scss"

export default function WeatherForecast({ forecastWeather }) {

  return (
    <div className="weatherForecast">
      {
        forecastWeather.list.map((item, i)=>{
          return <Card key={i}
                    data = { item }
                    size = { "forForecast" }
                    timeStep = { i }
                  />
        })
      }
    </div>
  );
}