import React from "react";
import { useWeather } from "../weathercontext/Weathercontext";
import stylecur from "../../../src/components/currentweather/Currentweather.module.css";
import {
  WiStrongWind,
  WiHumidity,
  WiBarometer,
} from "react-icons/wi";



const CurrentWeather = () => {
  const { weatherData } = useWeather();

  const {
    main: { temp, humidity, pressure },
    wind: { speed },
    weather
  } = weatherData;

 
  console.log(weatherData);
  return (
    <div className={stylecur.current}>
      <div className={stylecur.weather}>
      <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" />
        <div className={stylecur.temperature}> <span>{temp.toFixed(0)}<sup>°C</sup></span></div>
        <div className={stylecur.condition}>{weather[0].description}</div>
      </div>
      <div className={stylecur.details}>
        <div className={stylecur.detailItem}>
          <WiBarometer className={stylecur.detailIcon} />
          <span>Pressure: {pressure} hPa</span>
        </div>
        <div className={stylecur.detailItem}>
          <WiHumidity className={stylecur.detailIcon} />
          <span>Humidity: {humidity}%</span>
        </div>
        <div className={stylecur.detailItem}>
          <WiStrongWind className={stylecur.detailIcon} />
          <span>Wind: {speed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
