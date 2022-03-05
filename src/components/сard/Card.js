import React from 'react';
import "./Card.scss"

const weatherIcon = (iconCode) => {
  return "http://openweathermap.org/img/wn/" + iconCode + "@2x.png"
};

let suffix = (day) => (day === 1 || day === 21 || day === 31)
  ? "st" : (day === 2 || day === 22)
    ? "nd" : (day === 3 || day === 23)
      ? "rd" : "th"
;
const getDate = (type, dt) => {
  let  date = new Date(dt * 1000),
       month = date.toLocaleString('en-US', { month: 'short' }),
       day = date.toLocaleString('en-US', { day: 'numeric' }),
       time = date.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric' });

  return ( type === "time"
    ? time
    : month + " " + day + suffix(day)
  );
};

const hasPrecipitation = (type, data) => {
  let precipitation;
  if (data.hasOwnProperty("snow" || "rain")) {
    if (data.hasOwnProperty("snow" )) {
      let snow = data.snow;
      if (type === "lastHours") {
        precipitation = Object.keys( snow ).toString();
      }
      if (type === "volume") {
        Object.values(snow).forEach((time) => { precipitation = time })
      }
    }
    else {
      let rain = data.rain;
      if (type === "lastHours") {
        precipitation = Object.keys( rain ).toString();
      }
      if (type === "volume") {
        Object.values(rain).forEach((val) => { precipitation = val })
      }
    }
  } else {
    precipitation = 0;
  }
  return precipitation
};

export default function Card({ data, size, timeStep}) {

  return (
    <>
      <div className={size === "forCurrent" ? "cardCurrent" : "cardForecast"}>
        {
          size === "forCurrent"
            ? <div className="weatherLocal">
                <div className="localName">{data.name}</div>
                <div className="descriptionWeather">{data.weather[0].description}</div>
              </div>
            : ""
        }

        <div className="weatherDate">
          <div className="date">{getDate("date",data.dt)}</div>
          <div className="time">{getDate("time",data.dt)}</div>
        </div>

        <div className="weatherTemperature">
          <img src={weatherIcon(data.weather[0].icon)} alt={data.weather[0].description}/>
          <div className="temperature">
            <span className="value">{Math.round(data.main.temp)}</span>
            <span className="measure">&#xb0;C</span>
          </div>
        </div>

        <div className="weatherConditions">
          <div className="wind">
            <span className="title">Wind: </span>
            <span className="value">{data.wind.speed}</span>
            <span className="measure"> m/s</span>
          </div>
          <div className="humidity">
            <span className="title">Humidity: </span>
            <span className="value">{data.main.humidity}</span>
            <span className="measure"> %</span>
          </div>

          <div className="precipitation">
            <span className="title">
              Precipitation{hasPrecipitation("lastHours", data) === 0 ? "" : " (" + hasPrecipitation("lastHours", data) + ")" }:
            </span>
            <span className="value">
              {" " + hasPrecipitation("volume", data)}
            </span>
            <span className="measure"> mm</span>
          </div>
        </div>
      </div>
    </>
  )
}