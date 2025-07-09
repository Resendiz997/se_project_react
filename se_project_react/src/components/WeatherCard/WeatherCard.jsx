import './WeatherCard.css';
import { weatherOptions, defaultWeatherOptions } from '../../utils/constants';


function  WeatherCard({weatherData}){

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
            <p className="weather-card__temp">{weatherData.temp.F}</p>
            <img src={weatherOption?.url} alt={defaultWeatherOptions} className="weather-card__image" />

        </section>
    )    
}

export default WeatherCard