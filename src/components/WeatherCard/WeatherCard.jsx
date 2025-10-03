import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTempatureUnitContext from "../../contexts/currentTempatureUnit";

function WeatherCard({ weatherData }) {
  const { currentTempatureUnit } = useContext(CurrentTempatureUnitContext);

  const filteredWeatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredWeatherOption.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredWeatherOption[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTempatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C}
        °{currentTempatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={defaultWeatherOptions?.url}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
