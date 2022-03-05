import React from "react";
import Card from "../сard/Card";

export default function WeatherCurrent({ currentWeather }) {

  return (
    <div className="weatherCurrent">
      <Card
        data={ currentWeather }
        size={"forCurrent"}
      />
    </div>
  );
}