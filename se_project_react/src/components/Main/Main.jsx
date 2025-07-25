import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';

function Main({weatherData,HandleCardClick}){
    return(
        <main>
        <WeatherCard weatherData={weatherData}/>
        <section className="cards"> 
            <p className="cards__text">Today is {weatherData.temp.F}  / You may want to wear:</p>
            <ul className="card__list">
                {defaultClothingItems.filter((item)=>{
                    return item.weather === weatherData.type;
                })
                .map((item)=> {
                    return(
                        <ItemCard key={item._id} item={item} HandleCardClick={HandleCardClick}/>
                    );
                })}
            </ul>
        </section>
        </main>
    );
}

export default Main