import React, { useEffect } from "react";
import "./App.css";
import SearchBar from "../src/components/searchbar/SearchBar";
import CurrentWeather from "../src/components/currentweather/Currentweather";
import Forecast from "../src/components/forecast/Forecast";
import fetchWeatherData from "./service/api/weatherAPI";
import fetchForecastWeatherData from "./service/api/weatherForecast";
import { useWeather } from "./components/weathercontext/Weathercontext";

function App() {
  const {
    location,
    loading,
    setLoading,
    setWeatherData,
  
    setForecastWeatherData,
  } = useWeather();

  useEffect(() => {
    Promise.all([
      fetchWeatherData(location),
      fetchForecastWeatherData(location),
    ])
      .then((values) => {
        console.log(values);

        setWeatherData(values[0]);
        setForecastWeatherData(values[1])
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
        setLoading(true);
      });
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="app">
          <div className="header">
            <SearchBar />
          </div>
          <div className="left-panel">
            <CurrentWeather />
            <Forecast />
          </div>
         
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default App;
