import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import { BASE_URL,  API_KEY,  TOWNS } from "../constants/Constants"

const APIContext = createContext(null);

export function APIContextProvider({children}) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);

  // Fetch data
  useEffect(() => {
    const unsubscribe = () => {
      let arrLinks = [];

      TOWNS.forEach((town) => {
        let url1 = BASE_URL + "weather?" + "id=" + town.id + "&units=metric&appid=" + API_KEY;
        let url2 = BASE_URL + "forecast?" + "id=" + town.id + "&units=metric&cnt=5&appid=" + API_KEY;
        arrLinks.push(url1, url2);
      });

      const fetchURL = (url) => axios.get(url);
      const promiseArray = arrLinks.map(fetchURL);

      Promise.allSettled(promiseArray)
        .then((results) => {

          let weatherCurrent = [];
          let weatherForecast = [];

          results.forEach((result) => {
            !result.value.data.hasOwnProperty("list")
              ? weatherCurrent.push(result.value.data)
              : weatherForecast.push(result.value.data);
          });

          setCurrentWeather( weatherCurrent );
          setForecastWeather( weatherForecast );
          setIsLoading( false );

        })
        .catch((error) => {
          console.log(error)
        });

    };
    // Cleanup subscription on unmount
    return unsubscribe();
  }, []);

  return (
    <APIContext.Provider value={{
      currentWeather,
      forecastWeather,
      isLoading
    }}>
      {children}
    </APIContext.Provider>
  );
}

export function useAPIContext() {
  return useContext(APIContext)
}