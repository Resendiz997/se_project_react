import './WeatherCard.css';
import { weatherOptions, defaultWeatherOptions } from '../../utils/constants';
import { useContext } from 'react';
import CurrentTemperatureUnitContext from '../../utils/CurrentTemperatureUnit/CurrentTemperatureUnitContext';


function  WeatherCard({weatherData}){

const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    
const filteredWeatherOption = weatherOptions.filter((option) => {
        return option.day === weatherData.isDay && 
        option.condition === weatherData.condition;
    });
    

    let weatherOption;
    if (filteredWeatherOption.length === 0){
        weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    }
    else {
        weatherOption = filteredWeatherOption[0];
    }

    return(
        <section className="weather-card">
            <p className="weather-card__temp">{currentTemperatureUnit === "F" ? weatherData.temp.F: weatherData.temp.C}°{currentTemperatureUnit}</p>
            <img src={weatherOption?.url} alt={defaultWeatherOptions?.url} className="weather-card__image"/>

        </section>
    )    
}

export default WeatherCard