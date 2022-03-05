import React, {useState} from 'react';
import "./WeatherWidget.scss"
import DropDown from "../dropDown/DropDown";
import Weather from "../weather/Weather";
import { useAPIContext } from "../../context/APIContext";

export default function WeatherWidget() {
  const [currentTownId, setCurrentTown] = useState("all");
  const { currentWeather, forecastWeather } = useAPIContext();

  const getCurrentWeatherData = (data, cityId) => {
    let val;
      data.forEach((item)=>{
        if (item.id === Number(cityId)) {
           val = item;
        }
      });
    return val;
  };

  const getForecastData = (data, cityId) => {
    let val;
    data.forEach((item) => {
      if( Number(cityId) === item.city.id) {
        return val = item
      }
    });
    return val;
  };

  let validate = (currentTownId !== "all" );

  return (
    <div className="weatherWidget">

      <DropDown
        data = { currentWeather }
        firstElem = {"Kaikki kaupungit"}
        setTown = { setCurrentTown }
      />

      {validate
        ? <Weather
            dataCurrentWeather={getCurrentWeatherData( currentWeather, currentTownId )}
            dataForecastWeather={getForecastData( forecastWeather, currentTownId )}
          />
        : currentWeather.map((currentItem)=> {
            return <Weather
                     key={currentItem.id}
                     dataCurrentWeather={ currentItem }
                     dataForecastWeather={ getForecastData(forecastWeather, currentItem.id) }
                   />
          })
      }

    </div>
  );
}