import axios from "axios";

const fetchForecastWeatherData = async (city) => {
  const apiKey = "d98ffdeaebb5600658f6d76482d1f63e";

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`
  );

  return response.data;
};

export default fetchForecastWeatherData;
