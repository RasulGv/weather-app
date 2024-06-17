import React, { createContext, useState, useContext, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [forecastWeatherData, setForecastWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("baku");

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setLocation,
        location,
        loading,
        error,
        setLoading,
        setError,
        setWeatherData,
        forecastWeatherData,
        setForecastWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
