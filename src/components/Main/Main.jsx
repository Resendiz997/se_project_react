import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function Main({
  weatherData,
  HandleCardClick,
  currentClothingItems,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is  {currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C} °{currentTemperatureUnit}/ You may want to wear:
        </p>
        <ul className="card__list">
          {currentClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })  
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  currentUser={currentUser}
                  item={item}
                  HandleCardClick={HandleCardClick}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
