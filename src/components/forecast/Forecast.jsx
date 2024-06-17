import React from "react";
import Slider from "react-slick";
import { useWeather } from "../weathercontext/Weathercontext";
import stylefor from "../../../src/components/forecast/Forecast.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Forecast = () => {
  const { forecastWeatherData } = useWeather();

  const { list } = forecastWeatherData;

  const newList = list.filter((x) => x.dt_txt.includes("15:00:00"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cardList = newList.map((time, i) => (
    <div className={stylefor.card} key={i}>
      <div className={stylefor.cardHeader}>
        <div>{time.weather[0].main}</div>
        <div>{time.weather[0].description}</div>
      </div>
      <div className={stylefor.cardBody}>
        <div className={stylefor.cardTemp}>
          <div> {time.main.temp}°C</div>
          <div> {time.main.humidity}%</div>
        </div>
        <div className={stylefor.cardIcon}>
          <img src={`http://openweathermap.org/img/w/${time.weather[0].icon}.png`} alt={time.weather[0].description} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className={stylefor.sliderContainer}>
      <Slider {...settings}>
        {cardList}
      </Slider>
    </div>
  );
};

export default Forecast;
